import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Header(props) {
  return (
    <Navbar className="px-5" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand  href="#home">
        IMDB
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">TopRated</Nav.Link>
          <Nav.Link href="#pricing">Watchlist</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
