require("dotenv").config({ path: "../" });

const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;

const passport = require("passport");
const bcrypt = require("bcryptjs");

// Load User Model
const User = require("../models/user.model");

//

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// JWTStrategy

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    (jwt_payload, done) => {
      // console.log(jwt_payload.user._id);
      User.findOne({ _id: jwt_payload.user._id }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    }
  )
);

// LocalStrategy

passport.use(
  new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    // Match User
    User.findOne({ email: email })
      .then((user) => {
        if (!user) {
          // User doesn't exist
          return done(null, false, {
            message: "That email is not registered",
          });
        } else {
          // User exists
          bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
              // Password matches
              // console.log("pw matches");
              return done(null, user);
            } else {
              // Password doesn't match
              return done(null, false, { message: "Password incorrect" });
            }
          });
        }
      })
      .catch((err) => console.log(err));
  })
);

// GoogleStrategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // console.log(profile);

      // Match User
      User.findOne({ googleId: profile.id }).then((user) => {
        // console.log(user);

        if (user) {
          // User exists
          console.log("User already exists");
          console.log(user);
          return done(null, user);
        } else {
          // User doesn't exist
          new User({
            googleId: profile.id,
            displayName: profile.displayName,
            email: profile.emails[0].value,
            imageUrl: profile.photos[0].value,
          })
            .save()
            .then(() => {
              console.log("User Created");
              return done(null, user);
            })
            .catch((err) => console.log(err));
        }
      });
    }
  )
);
