import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import SocialMedia from '../socialMedia';
import { Link } from 'react-router-dom';

const NavbarObj = [
  {
    title: 'Home',
  },
  {},
];

const NavbarCustom = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand>
            <Link to="/" className="brand-logo">
              <h4>Eshi Digital</h4>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="mx-5" href="/">
                <ul className="main-menu">
                  <li className="main-menu-item">
                    <Link className="main-menu-link" to="/">
                      Home
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
              <Nav.Link className="mx-5" href="#">
                <ul className="main-menu">
                  <li className="main-menu-item">
                    <a className="main-menu-link">About us</a>
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
                </ul>
              </Nav.Link>
              <Nav.Link className="mx-5" href="/services">
                <ul className="main-menu">
                  <li className="main-menu-item">
                    <Link className="main-menu-link" to="/services">
                      Services
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
              <Nav.Link className="mx-5" href="/contact">
                <ul className="main-menu">
                  <li className="main-menu-item">
                    <Link className="main-menu-link" to="/contact">
                      Contact us
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
              <Nav.Item className="mx-5 my-1">
                <SocialMedia />
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default NavbarCustom;
