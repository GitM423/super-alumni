const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  companyName: { type: String, required: true },
  jobtitle: { type: String, required: true },
  jobtask: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String },
  workingHours: { type: Array },
  field: { type: Array },
  skills: { type: Array },
  budget: { type: Number, required: true },
});

const Order = mongoose.model("Orders", orderSchema);

module.exports = Order;
