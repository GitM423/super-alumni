const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  companyName: { type: String, required: true },
  jobtitle: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  workingHours: { type: Array, required: true },
  field: { type: Array, required: true },
  skills: { type: Array, required: true },
  budget: { type: Number, required: true },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
