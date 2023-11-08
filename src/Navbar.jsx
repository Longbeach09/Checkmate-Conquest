import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

function CustomNavbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Chess Conquest </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/ChessApp">Chess App</NavLink>
              <NavLink to="/loginDisplay">Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default CustomNavbar;
