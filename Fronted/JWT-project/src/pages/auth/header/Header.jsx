import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ isAuthenticated, handleLogout }) => {
  return (
    <Navbar
      bg={isAuthenticated ? "primary" : "dark"}
      variant={isAuthenticated ? "light" : "dark"}
      expand="lg"
      fixed="top"
      style={{ boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold" style={{ fontSize: "24px" }}>
          {isAuthenticated ? "Dashboard" : "Welcome"}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {!isAuthenticated ? (
              <>
                <Nav.Link as={Link} to="/login">
                  <Button variant="outline-light" style={{ borderRadius: "30px", padding: "8px 20px" }}>
                    Login
                  </Button>
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  <Button variant="outline-light" style={{ borderRadius: "30px", padding: "8px 20px" }}>
                    Register
                  </Button>
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/dashboard" className="text-light" style={{ fontSize: "18px" }}>
                  Dashboard
                </Nav.Link>
                <Nav.Link onClick={handleLogout} className="text-light" style={{ fontSize: "18px" }}>
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
