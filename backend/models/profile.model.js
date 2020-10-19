const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  //userIdentity: {type:String, required: true},
  displayName: {type:String, required: true},
  email: { type: String, required: true },
  githubUrl: { type: String },
  linkedinUrl: { type: String },
  imageUrl: { type: String },
  workingHours: { type: Array },
  field: { type: Array },
  skills: { type: Array },
  experience: { type: Number },
  about: { type: String, required: true },
  profileType: {type: String, required: true}
});

const Profile = mongoose.model("Profiles", profileSchema);

module.exports = Profile;
