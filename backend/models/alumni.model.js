const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const alumniSchema = new Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  title: { type: String },
  description: { type: String },
  githubUrl: { type: String },
  linkedinUrl: { type: String },
  imageUrl: { type: String },
  workingHours: { type: Array },
  field: { type: Array },
  skills: { type: Array },
  experience: { type: Number },
});

const Alumni = mongoose.model("alumni", alumniSchema);

module.exports = Alumni;
