const Footer = () => {
  return (
    <div className="footer-top position-relative">
      <div className="container">
        <div className="row">
          <div className="col-12" data-aos="fade-up" data-aos-delay="300">
            <div className="news-letter pb-100"></div>
          </div>
        </div>

        <div className="row">
          <div className="col-12" data-aos="fade-up" data-aos-delay="600">
            <div className="footer-card">
              <div className="footer-row">
                <div className="footer-col">
                  <div className="footer-widget">
                    <a className="footer-logo" href="index.html">
                      <h4 style={{ color: 'white' }} className="ml-4">
                        Eshi Digital
                      </h4>
                    </a>

                    <ul className="adress">
                      <li>
                        <span className="icon">
                          <i className="fas fa-phone-alt"></i>
                        </span>
                        <a href="tel:+251928970038">(+251) 928 97 00 38</a>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="fas fa-envelope"></i>
                        </span>
                        <a href="mailto:info@eshidigital.com">
                          info@eshidigital.com
                        </a>
                      </li>
                      <li>
                        <span className="icon">
                          <i class="fas fa-map-marker-alt"></i>
                        </span>
                        Addis Ababa, Ethiopia(ET)
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-col">
                  <div className="footer-widget">
                    <h4 className="title ml-4">All Services</h4>
                    <ul className="footer-menu">
                      <li>
                        <a className="footer-link" href="#">
                          <i className="icofont-rounded-double-right"></i>Mobile
                          app development
                        </a>
                      </li>
                      <li>
                        <a className="footer-link" href="#">
                          <i className="icofont-rounded-double-right"></i>Web
                          design and development
                        </a>
                      </li>
                      <li>
                        <a className="footer-link" href="#">
                          <i className="icofont-rounded-double-right"></i>
                          Social media advertisment
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-col">
                  <div className="footer-widget">
                    <h4 className="title ml-4">Information</h4>
                    <ul className="footer-menu">
                      <li>
                        <a className="footer-link" href="#">
                          <i className="icofont-rounded-double-right"></i>Team
                        </a>
                      </li>
                      <li>
                        <a className="footer-link" href="#">
                          <i className="icofont-rounded-double-right"></i>FAQ
                        </a>
                      </li>
                      <li>
                        <a className="footer-link" href="#">
                          <i className="icofont-rounded-double-right"></i>
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="footer-col">
                  <div className="footer-widget">
                    <h4 className="title ml-4">Follow Us</h4>
                    <p>You can follow us on the following</p>
                    <ul className="footer-social">
                      <li className="footer-social-item">
                        <a
                          className="footer-social-link"
                          href="https://www.facebook.com/eshidigital/"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li className="footer-social-item">
                        <a
                          className="footer-social-link"
                          href="https://twitter.com/DigitalEshi"
                        >
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li className="footer-social-item">
                        <a
                          className="footer-social-link"
                          href="https://www.instagram.com/eshidigital/"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li className="footer-social-item">
                        <a
                          className="footer-social-link"
                          href="https://t.me/eshidigital"
                        >
                          <i className="fab fa-telegram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
