import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function CustomNavbar() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <NavLink to="/">Chess Conquest </NavLink>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/ChessApp">Chess App</NavLink>
              {isAuthenticated ? (
                // If authenticated, show Logout link
                <NavLink to="/logout">
                  {/* onClick={handleLogout} add in when finished*/}
                  Logout
                </NavLink>
              ) : (
                // If not authenticated, show Login link
                <NavLink to="/loginDisplay">Login</NavLink>
              )}
              {/* <NavLink to="/loginDisplay">Login</NavLink> */}
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
