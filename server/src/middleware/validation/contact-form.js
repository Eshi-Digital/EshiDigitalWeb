const { body, param } = require("express-validator");
const mongoose = require("mongoose");

/**
 * @param {String} type
 */

exports.validate = (type) => {
  switch (type) {
    case "GET":
      return [
        param("id")
          .custom((value) => {
            return mongoose.Types.ObjectId.isValid(value);
          })
          .withMessage("Invalid Id"),
      ];

    case "CREATE":
      return [
        body("firstName").not().isEmpty().withMessage("First Name is required"),
        body("lastName").not().isEmpty().withMessage("Last Name is required"),
        body("email").not().isEmail().withMessage("Invalid email address"),
        body("phoneNumber")
          .not()
          .isEmpty()
          .withMessage("Phone number is required"),
        // body("subject").not().isEmpty().withMessage("Subject is required"),
        body("message").not().isEmpty().withMessage("Message is required"),
      ];

    case "UPDATE":
      return [
        param("id")
          .custom((value) => {
            return mongoose.Types.ObjectId.isValid(value);
          })
          .withMessage("Invalid Contact form ID"),
        body("firstName")
          .optional()
          .not()
          .isEmpty()
          .withMessage("First Name is required"),
        body("lastName")
          .optional()
          .not()
          .isEmpty()
          .withMessage("Last Name is required"),
        body("email").optional().isEmail().withMessage("Invalid email address"),
        body("phoneNumber")
          .not()
          .isEmpty()
          .withMessage("Phone number is required"),
        body("subject")
          .optional()
          .not()
          .isEmpty()
          .withMessage("Subject is required"),
        body("message")
          .optional()
          .not()
          .isEmpty()
          .withMessage("Message is required"),
        body("status")
          .optional()
          .not()
          .isEmpty()
          .withMessage("Status is required"),
      ];
    case "DELETE":
      return [
        param("id")
          .custom((value) => {
            return mongoose.Types.ObjectId.isValid(value);
          })
          .withMessage("Invalid Contact form ID"),
      ];
    default:
      return [];
  }
};
