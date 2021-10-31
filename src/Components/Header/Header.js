import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Header = () => {
  const {allContext} = useAuth();
  const { user, handleLogout} = allContext;
  return (
    <div>
      <Navbar fixed="top"  bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#">Adventure Travel</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="fw-bold" as={NavLink} to="/home">Home</Nav.Link>
              {/* <Nav.Link as={NavLink} to="#action2">about</Nav.Link> */}
              {user?.email ? (
                <>
                  <div  className="fw-bold d-flex justify-content-center align-items-center">
                  <span className="m-1">{user.displayName}</span>
                  <Button onClick={handleLogout} variant="primary" size="sm">
                      Logout
                    
                  </Button>
                  </div>
                  <Nav.Link className="fw-bold" as={NavLink} to="/mybooking">
                    MyBooking
                  </Nav.Link>
                  <Nav.Link className="fw-bold" as={NavLink} to="/manage">
                    Manage All Booking
                  </Nav.Link>
                  <Nav.Link className="fw-bold" as={NavLink} to="/addpackage">
                    AddNewPackage
                  </Nav.Link>
                </>
              ) : (
                <Link className="text-decoration-none" to="/login">
                  <Nav.Link className="fw-bold" as={NavLink} to="/login">
                    Login
                  </Nav.Link>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
