const express = require("express");
const contactFormController = require("../controllers/contact-form");
const contactFormValidation = require("../middleware/validation/contact-form");
const { verifyUser } = require("../middleware/auth");

const router = express.Router();

router
  .route("/")
  .get(contactFormController.getAllContactForms)
  .post(
    contactFormValidation.validate("CREATE"),
    contactFormController.createContactForm
  );

router
  .route("/:id")
  .get(
    contactFormValidation.validate("GET"),
    contactFormController.getContactForm
  )
  .patch(
    contactFormValidation.validate("UPDATE"),
    contactFormController.updateContactForm
  )
  .delete(
    contactFormValidation.validate("DELETE"),
    contactFormController.deleteContactForm
  );

module.exports = router;
