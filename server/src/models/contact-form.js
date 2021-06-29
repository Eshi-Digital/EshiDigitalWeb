const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const schema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    subject: {
      type: String,
    },
    message: {
      type: String,
    },
    status: {
      type: String,
      enum: ["NEW", "CONTACTED"],
      default: "NEW",
    },
  },
  {
    timestamps: true,
  }
);
schema.plugin(mongoosePaginate);
const ContactForm = mongoose.model("ContactForm", schema);

module.exports = ContactForm;
