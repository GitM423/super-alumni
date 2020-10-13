const router = require("express").Router();
let Order = require("../models/order.model");

router.route("/").get((req, res) => {
  Order.find()
    .then((cards) => res.json(cards))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Order.findById(req.params.id)
    .then((card) => res.json(card))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
