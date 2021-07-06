import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

function Header(props) {
  return (
    <Navbar
      className="px-5"
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Link className="logo" to="/">
        <Navbar.Brand href="#home">IMDB</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/toprated">
            TopRated
          </Link>
          <Link className="link" to="/watchlist">
            Watchlist
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
