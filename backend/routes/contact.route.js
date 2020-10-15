const router = require("express").Router();
let Contact = require("../models/contact.model");

router.route("/send").post((req, res) => {
  const newContact = new Contact({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    message: req.body.message
  });
  newContact.save()
    .then(result => {
      console.log("new contact saved to db!")
      //res.status(200).redirect("/")
    })
    .catch(err => {
      console.log(err);
      res.status(500);
    })
});

module.exports = router;
