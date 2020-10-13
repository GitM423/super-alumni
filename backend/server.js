require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

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

const developerRouter = require("./routes/alumni.route");
const companyRouter = require("./routes/company.route");
const orderRouter = require("./routes/order.route");
const contactRouter = require("./routes/contact.route");

app.use("/api/developers", developerRouter);
app.use("/api/company", companyRouter);
app.use("/api/order", orderRouter);
app.use("/api/contact", contactRouter);

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
