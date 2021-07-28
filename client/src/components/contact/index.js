const Contact = () => {
  return (
    <section className="contact-section-page section-pt-100 section-pb-150">
      <div className="container">
        <div className="row g-0">
          <div className="col-12">
            <div className="contact-form-card">
              <div className="row mb-n7">
                <div className="col-lg-6 mb-7">
                  <div className="section-title">
                    <h3 className="title">Get In Touch.</h3>
                    <span className="comment-hr mb-0"></span>
                  </div>

                  <div className="contact-media contact-media-list mt-xl-8">
                    <div className="icon">
                      <span className="icofont-ui-call"></span>
                    </div>
                    <div className="content">
                      <span className="text">Phone:</span>
                      <a href="tel:0123456789" className="number">
                        (+251) 928 97 00 38 <br />
                        (+251) 946 41 42 57 <br />
                        (+251) 966 30 30 09
                      </a>
                    </div>
                  </div>

                  <div className="contact-media contact-media-list">
                    <div className="icon">
                      <span className="icofont-send-mail"></span>
                    </div>
                    <div className="content">
                      <span className="text">Email:</span>
                      <a
                        href="mailto:abenezer@eshidigtal.com"
                        className="number"
                      >
                        abenezer@eshidigtal.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-media contact-media-list">
                    <div className="icon">
                      <span className="icofont-map-pins"></span>
                    </div>
                    <div className="content">
                      <span className="text">Address:</span>
                      <h3 className="number">Lideta, Addis Ababa,Ethiopia.</h3>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-7">
                  <div className="section-title">
                    <h3 className="title">Send Us A Message</h3>
                    <span className="comment-hr mb-0"></span>
                  </div>
                  <div className="comment-form pt-xl-8">
                    <form
                      id="contactForm"
                      action="https://htmlmail.hasthemes.com/saidul/seolly/contact.php"
                      method="POST"
                    >
                      <input
                        className="form-control"
                        placeholder="Enter Your Name"
                        type="text"
                        name="name"
                      />
                      <input
                        className="form-control"
                        placeholder="Enter Your Email"
                        type="text"
                        name="email"
                      />
                      <textarea
                        placeholder="Comment"
                        className="form-control textarea-control"
                        id="textarea"
                        cols="30"
                        rows="10"
                        name="massage"
                      ></textarea>
                      <button type="submit" className="btn btn-warning">
                        Submit Comment
                        <i className="icofont-rounded-double-right"></i>
                      </button>
                    </form>
                    <p className="form-message"></p>
                  </div>
                </div>
                <div className="col-12 mb-7">
                  <iframe
                    className="google-map"
                    src="https://maps.google.com/maps?q=Lideta%20firdbet&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  ></iframe>
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
