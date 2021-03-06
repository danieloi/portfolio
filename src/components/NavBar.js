import React from "react";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const NavBar = () => (
  //LinkContainer exact prop has to be set to true to stop about from always matching
  //Else the navl=bar link will always be highlighted regardless of the route you're in
  <div>
    <Navbar fixedTop collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="/">MAYOWA DANIEL</NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer exact={true} to="/">
            <NavItem eventKey={1}>HEY</NavItem>
          </LinkContainer>
          <LinkContainer exact={true} to="/projects">
            <NavItem eventKey={2}>PROJECTS</NavItem>
          </LinkContainer>
          <LinkContainer exact={true} to="/resume">
            <NavItem eventKey={3}>RESUME</NavItem>
          </LinkContainer>
          <LinkContainer exact={true} to="/contact">
            <NavItem eventKey={4}>CONTACT</NavItem>
          </LinkContainer>
          {/* <LinkContainer exact={true} to='/blog'>
                        <NavItem eventKey={5}>BLOG</NavItem>
                    </LinkContainer> */}
          {/* <NavLink to='/about'>ABOUT</NavLink>
                    <NavLink to='/projects'>PROJECTS</NavLink>
                    <NavLink to='/resume'>RESUME</NavLink>
                    <NavLink to='/contact'>CONTACT</NavLink>
                    <NavLink to='/blog'>BLOG</NavLink> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

// WEBPACK FOOTER //
// ./src/components/NavBar.js
