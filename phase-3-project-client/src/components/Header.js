import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" id="nav3">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/meal_maker">Create Your Meals</Nav.Link>
              <Nav.Link href="/tracker">Track Your Meals</Nav.Link>
              <Nav.Link href="/new_food">Add New Food</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="/" id="bar2">
            Calorie Counter App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
