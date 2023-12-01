import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

function CustomNavbar() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <div className="bg">
      <Navbar expand="lg" className="navbar">
        <Container className="bg">
          <NavLink to="/" className="navButt">
            Checkmate Conquest{" "}
          </NavLink>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/ChessUsers" className="navButt">
                Play Chess
              </NavLink>
              {isAuthenticated ? (
                // If authenticated, show Logout link
                <NavLink to="/logout" className="navButt">
                  {/* onClick={handleLogout} add in when finished*/}
                  Logout
                </NavLink>
              ) : (
                // If not authenticated, show Login link
                <NavLink to="/loginDisplay" className="navButt">
                  Login{" "}
                </NavLink>
              )}
              {/* <NavLink to="/loginDisplay">Login</NavLink> */}
              <NavLink to="/chessApp" className="navButt">
                {" "}
                working chess app{" "}
              </NavLink>
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
