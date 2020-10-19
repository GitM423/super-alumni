const router = require("express").Router();
let Filter = require("../models/filter.model");

router.route("/").get((req, res) => {
  Filter.find()
    .then((filters) => res.json(filters))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Filter.findById(req.params.id)
    .then((filter) => res.json(filter))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
