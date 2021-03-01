import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";

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
            <ul className="bold">
              <li>Backend Development</li>
              <li>Dart/Flutter</li>
              <li>React-Bootstrap</li>
            </ul>
          </Row>
        </div>
        <hr />
        <div className="portfolio">
          <Row>
            <p>Here are some of the projects I've worked on:</p>
            <ul>
              <li>
                <span>He'inon</span> - An Arapaho language learning app
              </li>
            </ul>
            <p>Visit my GitHub to look into my inolvement in other projects!</p>
          </Row>
        </div>
        <hr />
        <div className="contact">
          <Row id="contact">
            <p>
              Contact me via LinkedIn or at{" "}
              <a href="mailto:realjusticedunn@gmail.com">
                realjusticedunn@gmail.com
              </a>
            </p>
          </Row>
        </div>
      </Container>
    );
  }
}
