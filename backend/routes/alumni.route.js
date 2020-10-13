const router = require("express").Router();
let Alumni = require("../models/alumni.model");

router.route("/").get((req, res) => {
  Alumni.find()
    .then((boosters) => res.json(boosters))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Alumni.findById(req.params.id)
    .then((booster) => res.json(booster))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
