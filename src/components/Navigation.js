import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
// import { Route, Link } from "react-router-dom";

export class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/">
              Home
            </NavLink>
            <NavLink className="d-inline p-2 bg-dark text-white" to="/clients">
              Clients
            </NavLink>
            <NavLink
              className="d-inline p-2 bg-dark text-white"
              to="/provyders"
            >
              Providers
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

{
  /* // Home (list of clients)
// Back
// New Client
// New Provider
//Providers */
}
