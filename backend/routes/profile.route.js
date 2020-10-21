const router = require("express").Router();
let Profile = require("../models/user.model");

router.route("/updateType").post((req, res) => {
  console.log(req.body);
  Profile.update(
    { _id: req.body.userId },
    {
      $set: {
        profileType: req.body.profileType,
      },
    }
  ).then(res.json({ msg: "ProfileType Updated" }));
});

// GET single Profile
router.route("/:id").get((req, res) => {
  Profile.findById(req.params.id).then((result) => {
    let profileInfo = {
      displayName: result.displayName,
      imageUrl: result.imageUrl,

      title: result.title,
      description: result.description,

      email: result.email,
      githubUrl: result.githubUrl,
      linkedinUrl: result.linkedinUrl,

      workingHours: result.workingHours,
      field: result.field,
      skills: result.skills,

      experience: result.experience,
    };

    res.json(profileInfo);
  });
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
router.route("/:id").delete((req, res) => {
  Profile.findByIdAndDelete(req.params.id).then((result) => res.json(result));
});

module.exports = router;
