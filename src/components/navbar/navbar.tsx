import React, { Component } from "react";
import "./navbar.css";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import github from '../../images/github-logo-white.png';
import linkedin from '../../images/linkedin-logo-white.png';

export default class NavBar extends Component {
  render() {
    return (
      <div className="d-none d-sm-block">
      <Nav className="ml-auto nav fixed-top">
        <div className="center">
          <div>
            <NavItem>
              <Nav.Link eventKey="1" as={Link} to="/">
                <h3 className="brand">Justice Dunn</h3>
              </Nav.Link>
            </NavItem>
          </div>
          <div className="logos">
            <NavItem>
              <Nav.Link eventKey="2" as={Link} to="/contact">
                <h5 className="brand">Contact</h5>
              </Nav.Link>
            </NavItem>
            <NavItem>
              <a href="https://github.com/JusticeDunn" target="_blank">
                <img
                  className="logo"
                  src={github}
                  alt="link to my github"
                />
              </a>
            </NavItem>
            <NavItem>
              <a href="https://www.linkedin.com/in/justice-dunn-1379b31bb/" target="_blank">
                <img
                  className="logo"
                  src={linkedin}
                  alt="link to my linkedin"
                />
              </a>
            </NavItem>
          </div>
        </div>
      </Nav>
      </div>
    );
  }
}
