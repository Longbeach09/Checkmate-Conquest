import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

function CustomNavbar() {
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/ChessApp">Chess App</NavLink>
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
