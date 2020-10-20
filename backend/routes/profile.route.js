const router = require("express").Router();
let Profile = require("../models/user.model");

// GET single Profile
router.route("/:email").get((req, res) => {
  Profile.findOne({ email: req.params.email }).then((result) =>
    res.json(result)
  );
});

// PUT update profile
router.route("/").put((req, res) => {
  const filter = { email: req.body.email };
  const update = {
    email: req.body.email,
    displayName: req.body.displayName,
    title: req.body.title,
    imageUrl: req.body.imageUrl,

    profileType: req.body.profileType,

    description: req.body.description,
    githubUrl: req.body.githubUrl,
    linkedinUrl: req.body.linkedinUrl,
    experience: req.body.experience,

    workingHours: req.body.workingHours,
    field: req.body.field,
    skills: req.body.skills,
  };

  Profile.findOneAndUpdate(filter, update)
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
  // console.log(req.body)

  const newProfile = new Profile({
    email: req.body.email,
    displayName: req.body.displayName,
    title: req.body.title,
    imageUrl: req.body.imageUrl,

    profileType: req.body.profileType,

    description: req.body.description,
    githubUrl: req.body.githubUrl,
    linkedinUrl: req.body.linkedinUrl,
    experience: req.body.experience,

    workingHours: req.body.workingHours,
    field: req.body.field,
    skills: req.body.skills,
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
  Profile.findOneAndDelete({ email: req.params.email }).then((result) =>
    res.json(result)
  );
});

module.exports = router;
