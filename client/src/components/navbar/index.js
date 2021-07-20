import SocialMedia from '../social-media';

const Navbar = () => {
  return (
    <>
      <div>
        <header className="header">
          <div id="active-sticky" className="header-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col">
                  <a href="index.html" className="brand-logo">
                    {/* <img src="assets/images/logo/logo.png" alt="brand logo" /> */}
                    <h4>Eshi Digital</h4>
                  </a>
                </div>
                <div className="col-auto">
                  <a
                    className="btn btn-warning btn-hover-warning d-none d-sm-inline-block d-lg-none"
                    href="#"
                  >
                    Analyze Your Site <i className="icofont-arrow-right"></i>
                  </a>

                  <button
                    type="button"
                    className="btn btn-warning offcanvas-toggler"
                    data-bs-toggle="modal"
                    data-bs-target="#offcanvas-modal"
                  >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                  </button>
                  <nav className="d-none d-lg-block">
                    <ul className="main-menu text-end">
                      <li className="main-menu-item">
                        <a className="main-menu-link" href="index.html">
                          Home
                        </a>
                      </li>

                      <li className="main-menu-item">
                        <a className="main-menu-link" href="#">
                          About us
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <a className="sub-menu-link" href="about-us.html">
                              Team
                            </a>
                          </li>
                          <li>
                            <a className="sub-menu-link" href="faq.html">
                              FAQ
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="main-menu-item">
                        <a className="main-menu-link" href="case-details.html">
                          Services
                        </a>
                      </li>
                      <li className="main-menu-item">
                        <a className="main-menu-link" href="#">
                          Contact
                        </a>
                      </li>

                      <li className="main-menu-item">
                        <a
                          className="btn btn-warning btn-hover-warning btn-lg"
                          href="blog-details.html"
                        >
                          Analyze Your Site{' '}
                          <i className="icofont-arrow-right"></i>
                        </a>
                      </li>

                      <li className="main-menu-item">
                        <SocialMedia />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Navbar;
