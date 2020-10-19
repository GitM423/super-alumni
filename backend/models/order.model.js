const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  displayName: { type: String, required: true },

  imageUrl: { type: String },

  title: { type: String, required: true },
  description: { type: String, required: true },

  jobtask: { type: String, required: true },
  budget: { type: Number, required: true },

  workingHours: { type: Array },
  field: { type: Array },
  skills: { type: Array },
});

const Order = mongoose.model("Orders", orderSchema);

module.exports = Order;
