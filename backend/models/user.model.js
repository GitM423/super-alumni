const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, minlength: 6 },
  displayName: { type: String },
  googleId: { type: String },
  imageUrl: { type: String },

  profileType: { type: String },

  title: { type: String },
  description: { type: String },
  githubUrl: { type: String },
  linkedinUrl: { type: String },

  // Filters
  workingHours: { type: Array },
  field: { type: Array },
  skills: { type: Array },
  experience: { type: Array },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
