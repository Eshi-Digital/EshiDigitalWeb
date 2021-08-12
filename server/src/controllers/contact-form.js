const ContactForm = require('../models/contact-form');
const { validationResult } = require('express-validator');
/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */

exports.getAllContactForms = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }

    const options = {
      page: req.query.page * 1 || 1,
      limit: req.query.limit * 1 || 10,
      sort: '-createdAt',
    };

    const result = await ContactForm.paginate({}, options);
    res.status(200).json({
      status: 'success',
      result,
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getContactForm = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }
    const contactForm = await ContactForm.findById(req.params.id);
    if (!contactForm) {
      res.status(404).json({
        status: 'error',
        message: 'Contact form with this ID does not exist',
      });
    }
    res.status(200).json({
      status: 'success',
      contactForm,
    });
  } catch (err) {}
};

exports.createContactForm = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }
    const contactForm = await ContactForm.create({
      ...req.body,
    });
    res.status(201).json({
      status: 'success',
      contactForm,
    });
    console.log('Created Successfully');
  } catch (err) {
    //TODO
  }
};

exports.updateContactForm = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }
    const contactForm = await ContactForm.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    if (!contactForm) {
      res.status(404).json({
        status: 'error',
        message: 'Contact Form with this ID does not exist',
      });
    }
    res.status(200).json({
      status: 'success',
      contactForm,
    });
  } catch (err) {
    //TODO
  }
};
exports.deleteContactForm = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({
        status: 'error',
        message: errors.array()[0].msg,
      });
    }
    const contactForm = await ContactForm.findByIdAndDelete(req.params.id);
    if (!contactForm) {
      res.status(404).json({
        status: 'error',
        message: 'Contact Form with this ID does not exist',
      });
    }
    res.status(204).json({
      status: 'success',
      contactForm: null,
    });
  } catch (err) {
    //TODO
  }
};
