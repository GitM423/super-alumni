require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const path = require("path");

const passport = require("passport");
require("./config/passport.config");

const cookieSession = require("cookie-session");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);

// Passport config

// Connect to DB

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected..."))
  .catch((err) => console.log(err));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Set app

const app = express();

// Body parser

app.use(cors());
app.use(express.json());

// Sessions

app.use(
  cookieSession({
    name: "session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [process.env.SESSION_SECRET],
  })
);

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//   })
// );

// Passport middleware

app.use(passport.initialize());
app.use(passport.session());

// Set Routes

app.use("/api/alumni", require("./routes/alumni.route"));
app.use("/api/companies", require("./routes/company.route"));
app.use("/api/orders", require("./routes/order.route"));
app.use("/api/contacts", require("./routes/contact.route"));
app.use("/api/filters", require("./routes/filter.route"));
app.use("/auth", require("./routes/auth.route"));
app.use("/api/profiles", require("./routes/profile.route"));

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
