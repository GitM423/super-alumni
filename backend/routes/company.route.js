const router = require("express").Router();
let Company = require("../models/company.model");

router.route("/").get((req, res) => {
  Company.find()
    .then((companies) => res.json(companies))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Company.findById(req.params.id)
    .then((company) => res.json(company))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
