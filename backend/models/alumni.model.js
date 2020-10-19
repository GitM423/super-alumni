const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const alumniSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  githubUrl: { type: String },
  linkedinUrl: { type: String },
  imageUrl: { type: String },
  workingHours: { type: Array },
  field: { type: Array },
  skills: { type: Array },
  experience: { type: Number },
});

const Alumni = mongoose.model("Alumni", alumniSchema);

module.exports = Alumni;
