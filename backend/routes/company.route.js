const router = require("express").Router();
let Company = require("../models/company.model");

router.route("/").get((req, res) => {
  Company.find()
    .then((boosters) => res.json(boosters))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Company.findById(req.params.id)
    .then((booster) => res.json(booster))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
