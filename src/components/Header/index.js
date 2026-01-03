import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="/">Admin Dashboard</Navbar.Brand> */}'
        <Link to= '/' className='navbar-brand'>Admin Dashboard</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Signin Link */}
            <Nav.Item>
              <Nav.Link as={NavLink} to="/signin">
                Sign In
              </Nav.Link>
            </Nav.Item>

            {/* Signup Link */}
            <Nav.Item>
              <Nav.Link as={NavLink} to="/signup">
                Sign Up
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
