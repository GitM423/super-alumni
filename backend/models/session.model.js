const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
  _id: { type: String, required: true, unique: true },
  expires: { type: Date, required: true },
  session: { type: String, required: true },
});

const Session = mongoose.model("session", sessionSchema);

module.exports = Session;
