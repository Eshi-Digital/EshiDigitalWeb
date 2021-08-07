import { useState } from 'react';

import { FormErrors } from './form_errors';

const Contact = () => {
  const [form, setForm] = useState({
    fName: '',
    email: '',
    phoneNumber: '',
    message: '',
    formErrors: { fName: '', email: '', phoneNumber: '', message: '' },
    fNameValid: false,
  });

  const [count, setCount] = useState(1);

  const ValidateField = (fieldName, value) => {
    let fieldValidationErrors = form.formErrors;
    let fNameValid = form.fNameValid;

    switch (fieldName) {
      case 'fName':
        fNameValid = value.length <= 0;
        fieldValidationErrors.fName = fNameValid ? '' : ' is required';
        break;

      default:
        break;
    }

    setForm(
      {
        formErrors: fieldValidationErrors,
        fNameValid: fNameValid,
      },
      validateForm
    );
  };

  const validateForm = () => {
    setForm({
      fNameValid: form.fNameValid,
    });
  };

  const updateForm = (e) => {
    setForm({ [e.target.name]: e.target.value }, () =>
      ValidateField(e.target.name, e.target.value)
    );
  };

  console.log(form);
  return (
    <section className="contact-section-page section-pt-100 section-pb-150">
      <div className="container">
        <div className="row g-0">
          <div className="col-12">
            <div className="contact-form-card">
              <div className="row mb-n7">
                <div className="col-12 mb-7">
                  <div className="section-title">
                    <div className="text-center">
                      <i className="fa fa-location fa-4x"></i>
                    </div>
                    <h3 className="title text-center">Our Location.</h3>
                  </div>
                  <iframe
                    className="google-map"
                    src="https://maps.google.com/maps?q=Lideta%20firdbet&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
                </div>
                <div className="col-lg-6 mb-7">
                  <div className="section-title">
                    <h3 className="title text-center">Get In Touch.</h3>
                  </div>

                  <div className="contact-media contact-media-list mt-xl-8">
                    <div className="icon">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="content">
                      <span className="text">Phone:</span>
                      <span className="number">
                        (+251) 928 97 00 38 <br />
                        (+251) 946 41 42 57 <br />
                        (+251) 966 30 30 09
                      </span>
                    </div>
                  </div>

                  <div className="contact-media contact-media-list">
                    <div className="icon">
                      <span className="fa fa-envelope"></span>
                    </div>
                    <div className="content">
                      <span className="text">Email:</span>
                      <a href="mailto:info@eshidigtal.com" className="number">
                        info@eshidigtal.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-media contact-media-list">
                    <div className="icon">
                      <span className="fa fa-city"></span>
                    </div>
                    <div className="content">
                      <span className="text">Address:</span>
                      <h3 className="number">
                        Lideta,
                        <br /> Addis Ababa,
                        <br />
                        Ethiopia.
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 mb-7">
                  <div className="section-title">
                    <h3 className="title">Send us a message</h3>
                  </div>
                  <div className="panel panel-default">
                    <FormErrors formErrors={form.formErrors} />
                  </div>
                  <div className="comment-form pt-xl-8">
                    <form
                      id="contactForm"
                      action=""
                      onSubmit={() => {
                        console.log('Submitted a form');
                      }}
                    >
                      {count === 1 ? (
                        <>
                          {' '}
                          <label>Full name</label>
                          <input
                            className="form-control"
                            type="text"
                            name="fName"
                            onChange={updateForm}
                            value={form.fullName}
                            placeholder="Full name"
                            required={count === 1}
                          />
                        </>
                      ) : null}

                      {count === 2 ? (
                        <>
                          <label>Email</label>
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            onChange={updateForm}
                            value={form.email}
                            placeholder="Email"
                          />
                          <label>Phone Number</label>
                          <input
                            className="form-control"
                            type="text"
                            name="phoneNumber"
                            onChange={updateForm}
                            value={form.phoneNumber}
                            placeholder="Phone number"
                          />
                        </>
                      ) : null}

                      {count === 3 ? (
                        <>
                          <label>Your message</label>
                          <textarea
                            className="form-control textarea-control"
                            id="textarea"
                            cols="30"
                            rows="10"
                            name="message"
                            onChange={updateForm}
                            value={form.message}
                            placeholder="Write your message here..."
                          ></textarea>
                        </>
                      ) : null}

                      <button
                        className="btn btn-dark mx-2"
                        onClick={(e) => {
                          e.preventDefault();
                          setCount(count - 1);
                        }}
                        disabled={count < 2}
                      >
                        Previous
                      </button>
                      {count === 3 ? (
                        <>
                          <button
                            type="submit"
                            className="btn btn-success mx-2"
                            disabled={!form.formValid}
                          >
                            Submit
                          </button>
                        </>
                      ) : null}

                      {count === 3 ? null : (
                        <>
                          <button
                            className="btn btn-secondary mx-2"
                            onClick={(e) => {
                              e.preventDefault();
                              setCount(count + 1);
                            }}
                            disabled={count > 2}
                          >
                            Next
                          </button>
                        </>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
