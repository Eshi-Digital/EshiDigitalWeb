const express = require("express");
const contactFormController = require("../controllers/contact-form");
const contactFormValidation = require("../middleware/validation/contact-form");
const { verifyUser } = require("../middleware/auth");
const { verify } = require("jsonwebtoken");

const router = express.Router();

router
  .route("/")
  .get(verifyUser, contactFormController.getAllContactForms)
  .post(
    contactFormValidation.validate("CREATE"),
    contactFormController.createContactForm
  );

router
  .route("/:id")
  .get(
    verifyUser,
    contactFormValidation.validate("GET"),
    contactFormController.getContactForm
  )
  .patch(
    verifyUser,
    contactFormValidation.validate("UPDATE"),
    contactFormController.updateContactForm
  )
  .delete(
    verifyUser,
    contactFormValidation.validate("DELETE"),
    contactFormController.deleteContactForm
  );

module.exports = router;
