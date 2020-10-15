const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companySchema = new Schema({
  companyName: { type: String, required: true },
  email: { type: String, required: true },
  imageUrl: { type: String },
});

const Company = mongoose.model("Companies", companySchema);

module.exports = Company;
