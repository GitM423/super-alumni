const router = require("express").Router();
let Profile = require("../models/profile.model");

// GET single Profile
router.route("/:email").get((req, res) => {
  Profile
    .findOne({ email: req.params.email })
    .then((result) => res.json(result));
});

// PUT update profile
router.route("/").put((req, res) => {

  const filter = { email: req.body.email };
  const update = {
    displayName: req.body.displayName,
    email: req.body.email,
    githubUrl: req.body.githubUrl,
    linkedinUrl: req.body.linkedinUrl,
    imageUrl: req.body.imageUrl,
    workingHours: req.body.workingHours,
    field: req.body.field,
    skills: req.body.skills,
    experience: req.body.experience,
    about: req.body.about,
    profileType: req.body.profileType
  };

  Profile
    .findOneAndUpdate(filter, update)
    .then((result) => {
      console.log("Profile updated!");
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });

});

// POST Profile
router.route("/").post((req, res) => {
  console.log(req.body)

  const newProfile = new Profile({
    displayName: req.body.displayName,
    email: req.body.email,
    githubUrl: req.body.githubUrl,
    linkedinUrl: req.body.linkedinUrl,
    imageUrl: req.body.imageUrl,
    workingHours: req.body.workingHours,
    field: req.body.field,
    skills: req.body.skills,
    experience: req.body.experience,
    about: req.body.about,
    profileType: req.body.profileType
  });

  newProfile
    .save()
    .then((result) => {
      console.log("new profile saved to db!");
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

// DELETE profile
router.route("/:email").delete((req, res) => {
  Profile
    .findOneAndDelete({ email: req.params.email })
    .then((result) => res.json(result));
});


module.exports = router;
