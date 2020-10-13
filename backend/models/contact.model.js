const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pricesSchema = new Schema({
  _id: { type: String, required: true },
  priceData: { type: Array, required: true },
});

const Prices = mongoose.model("Prices", pricesSchema);

module.exports = Prices;
