import SocialMedia from '../socialMedia';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div>
        <header className="header">
          <div id="active-sticky" className="header-bottom">
            <div className="container">
              <div className="row align-items-center">
                <div className="col">
                  <Link to="/" className="brand-logo">
                    <h4>Eshi Digital</h4>
                  </Link>
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
                        <Link className="main-menu-link" to="/">
                          Home
                        </Link>
                      </li>

                      <li className="main-menu-item">
                        <a className="main-menu-link" href="#">
                          About us
                        </a>
                        <ul className="sub-menu">
                          <li>
                            <Link className="sub-menu-link" to="/team">
                              Team
                            </Link>
                          </li>
                          <li>
                            <Link className="sub-menu-link" to="/faq">
                              FAQ
                            </Link>
                          </li>
                        </ul>
                      </li>

                      <li className="main-menu-item">
                        <Link className="main-menu-link" to="/services">
                          Services
                        </Link>
                      </li>
                      <li className="main-menu-item">
                        <Link className="main-menu-link" to="/contact">
                          Contact us
                        </Link>
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
