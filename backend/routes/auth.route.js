require("dotenv").config({ path: "../" });

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");
const jwt = require("jsonwebtoken");

// User model
const User = require("../models/user.model");

// Register Handle
router.post("/register", (req, res, next) => {
  const { displayName, email, password, password2 } = req.body;
  let errors = [];

  // Check required fields
  if (!displayName || !email || !password || !password2) {
    errors.push({ msg: "Please fill in all fields" });
  }

  // Check passwords match
  if (password != password2) {
    errors.push({ msg: "Passwords do not match" });
  }

  //   Check password length
  if (password.length < 6) {
    errors.push({ msg: "Password should be at least 6 characters" });
  }

  if (errors.length > 0) {
    return res.send({ status: "error", msg: errors });

    // res.render("register", {
    //   errors,
    //   name,
    //   email,
    //   password,
    //   password2,
    // });
  } else {
    // res.send("pass");
    // Validation passed

    User.findOne({ email: email }).then((user) => {
      if (user) {
        // User exists
        errors.push({ msg: "Email is already registered" });
        // return res.status(500).send(errors);
        return res.send({ status: "error", msg: errors });

        // res.render("register", {
        //   errors,
        //   firstName,
        //   lastName,
        //   email,
        //   password,
        //   password2,
        // });
      } else {
        const newUser = new User({
          displayName,
          email,
          password,
        });

        // Hash Password
        bcrypt.genSalt(10, (err, salt) =>
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            //Set Password to hashed
            newUser.password = hash;
            // Save User
            console.log("test");
            newUser.save().then((user) => {
              // req.flash(
              //   "success_msg",
              //   "You are now registered and can log in"
              // );
              console.log("User Registered");
              console.log(newUser);

              return res.send({ status: "ok" });
            });
            // .catch((err) => console.log(err));
          })
        );
      }
    });
  }
});

// Login Handle

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // console.log(user);

    if (err) {
      return next(err);
    }
    if (!user) {
      return res.send({
        status: "error",
        msg: [{ msg: "Email or Password incorrect" }],
      });
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }

      const body = { _id: user.id, email: user.email };

      const token = jwt.sign({ user: body }, process.env.JWT_SECRET);
      return res.json({ token, status: "ok", msg: [{ msg: "Logged In" }] });
      // return res.send({ status: "ok", msg: [{ msg: "Logged In" }] });
    });
  })(req, res, next);
});

// router.post(
//   "/login",
//   passport.authenticate("local", {
//     failureRedirect: "http://localhost:3000/login",
//   }),
//   (req, res) => {
//     console.log(req.session.passport);
//     // res.send({ status: "ok", msg: [{ msg: "test" }] });
//     res.redirect("/auth/login-success");
//   }
// );

// router.post(
//   "/login",
//   passport.authenticate("local", {
//     failureRedirect: "/login-failure",
//     successRedirect: "login-success",
//   }),
//   (err, req, res, next) => {
//     if (err) next(err);
//   }
// );
// router.get("/login-success", (req, res, next) => {
//   console.log(req.session.passport);

//   res.redirect("http://localhost:3000/dashboard");
// });
// router.get("/login-failure", (req, res, next) => {
//   console.log(req.session.passport);

//   res.redirect("http://localhost:3000/login");
// });

// Login with Google Handle

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile"] }),
  (req, res, next) => {
    res.send({ status: "ok", msg: [{ msg: "test" }] });
  }
);

//  Google Auth Callback Handle

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "http://localhost:3000/login",
  }),
  (req, res) => {
    console.log(req.session.passport);
    // res.send({ status: "ok", msg: [{ msg: "test" }] });
    res.redirect("http://localhost:3000/dashboard");
  }
);

// Token Handle

router.post(
  "/tokenValidity",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (!req.user) {
      res.send({ username: "nobody" });
    } else {
      res.send(req.user);
    }
  }
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // console.log(req.user);
    User.findOne({ email: req.user.email })
      .then((user) =>
        res.json({
          displayName: user.displayName,
          id: user._id,
        })
      )
      .catch((err) => res.status(400).json("Error: " + err));
    // console.log(User.find({ email: req.user.email }));
    // res
    //   .send
    //   // user
    //   //   {
    //   //   displayName: user.displayName,
    //   //   id: user._id,
    //   // }
    //   ();
  }
);

// Logout Handle

router.get("/logout", (req, res, next) => {
  req.logout();
  // req.flash("success_msg", "You are logged out");
  res.redirect("http://localhost:3000/login");
});

module.exports = router;
