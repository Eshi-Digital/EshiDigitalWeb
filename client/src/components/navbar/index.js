import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import SocialMedia from '../socialMedia';
import { Link } from 'react-router-dom';

const NavbarCustom = () => {
  return (
    <>
      <Container>
        <Navbar expand="lg" className="p-4">
          <Navbar.Brand>
            <Link to="/" className="brand-logo">
              <img
              className="pb-2 pl-4"
                style={{ width: '140px', height: '80px' }}
                src={'assets/images/logo/eshi_colored_name.png'}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="mx-5" href="/">
                <ul className="main-menu">
                  <li className="main-menu-item">
                    <Link className="main-menu-link" to="/">
                      <h5>Home</h5>
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
              <Nav.Link className="mx-5" href="#">
                <ul className="main-menu">
                  <li className="main-menu-item">
                    <a className="main-menu-link">
                      <h5>About us</h5>
                    </a>
                    <ul className="sub-menu">
                      <li>
                        <a className="sub-menu-link" href="#team">
                          <h5>Team</h5>
                        </a>
                      </li>
                      <li>
                        <a className="sub-menu-link" href="#FAQ">
                          <h5>FAQ</h5>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </Nav.Link>
              <Nav.Link className="mx-5" href="/services">
                <ul className="main-menu">
                  <li className="main-menu-item">
                    <Link className="main-menu-link" to="/services">
                      <h5>Services</h5>
                    </Link>
                  </li>
                </ul>
              </Nav.Link>
              <Nav.Link className="mx-5" href="/contact">
                <ul className="main-menu">
                  <li className="main-menu-item">
                    <Link className="main-menu-link" to="/contact">
                      <h5>Contact us</h5>
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
