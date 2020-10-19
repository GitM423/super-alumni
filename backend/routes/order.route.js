const router = require("express").Router();
let Order = require("../models/order.model");

router.route("/").get((req, res) => {
  Order.find()
    .then((orders) => res.json(orders))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Order.findById(req.params.id)
    .then((order) => res.json(order))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
