const router = require("express").Router();
let Filter = require("../models/filter.model");

router.route("/").get((req, res) => {
  Filter.find()
    .then((boosters) => res.json(boosters))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Filter.findById(req.params.id)
    .then((booster) => res.json(booster))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
