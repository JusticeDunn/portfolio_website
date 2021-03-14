import React, { Component } from 'react'
import './footer.css'
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import github from '../../images/github-logo-white.png';
import linkedin from '../../images/linkedin-logo-white.png';

export default class Footer extends Component {
    render() {
        return (
            <div className="d-none d-sm-block">
                <Nav className="ml-auto nav">
                    <div className="center">
                    <div className="logos">
                        <NavItem>
                        <a href="https://github.com/JusticeDunn" target="_blank" rel="noreferrer">
                            <img
                            className="logo"
                            src={github}
                            alt="link to my github"
                            />
                        </a>
                        </NavItem>
                        <NavItem>
                        <a href="https://www.linkedin.com/in/justice-dunn-1379b31bb/" target="_blank" rel="noreferrer">
                            <img
                            className="logo"
                            src={linkedin}
                            alt="link to my linkedin"
                            />
                        </a>
                        </NavItem>
                        <NavItem className="center">
                        <Nav.Link eventKey="1" as={Link} to="/blog">
                            <h5 className="brand">Blog</h5>
                        </Nav.Link>
                        </NavItem>
                        <NavItem className="center">
                        <Nav.Link eventKey="2" as={Link} to="/admin">
                            <h5 className="brand">Admin</h5>
                        </Nav.Link>
                        </NavItem>
                    </div>
                    </div>
                </Nav>
            </div>
        )
    }
}
