const router = require("express").Router();
let Contact = require("../models/contact.model");

router.route("/").get((req, res) => {
  Contact.find()
    .then((cards) => res.json(cards))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Contact.findById(req.params.id)
    .then((card) => res.json(card))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
