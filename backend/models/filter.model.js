const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const filterSchema = new Schema({
  _id: { type: String, required: true },
  options: { type: Array, required: true },
});

const Filter = mongoose.model("Filters", filterSchema);

module.exports = Filter;
