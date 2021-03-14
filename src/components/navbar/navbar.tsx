import React, { Component } from "react";
import "./navbar.css";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div className="d-none d-sm-block">
        <Nav className="nav fixed-top">
          <div className="center">
            <div>
              <NavItem>
                <Nav.Link eventKey="1" as={Link} to="/">
                  <h1 className="brand">Justice_Dunn</h1>
                </Nav.Link>
              </NavItem>
            </div>
          </div>
        </Nav>
      </div>
    );
  }
}
