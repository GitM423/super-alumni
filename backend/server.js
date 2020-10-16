require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// let databaseUri = process.env.DB_URI;

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

const alumnisRouter = require("./routes/alumni.route");
const companiesRouter = require("./routes/company.route");
const ordersRouter = require("./routes/order.route");
const contactsRouter = require("./routes/contact.route");
const filterRouter = require("./routes/filter.route");

app.use("/api/alumni", alumnisRouter);
app.use("/api/companies", companiesRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/contacts", contactsRouter);
app.use("/api/filters", filterRouter);

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
