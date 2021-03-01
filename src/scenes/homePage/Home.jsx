import React, { Component } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <div className="about">
          <Row>
            <p>
              I'm a <span>Full-Stack Web Engineer</span> with a knack for
              problem-solving. I consider myself a jack-of-all-trades with
              specific interest and experience in:
            </p>
            <ul>
              <li>Backend Development</li>
              <li>Dart/Flutter</li>
              <li>React-Bootstrap</li>
            </ul>
          </Row>
        </div>
        <div className="portfolio">
          <Row>
            <p>Portfolio</p>
          </Row>
        </div>
        <div className="contact">
          <Row>
            <p>Contact</p>
          </Row>
        </div>
      </Container>
    );
  }
}
