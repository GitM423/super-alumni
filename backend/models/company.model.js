const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companySchema = new Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  imageUrl: { type: String },
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
