import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";
import { Link } from 'react-router-dom'

import "./home.css";
import me from '../../images/me.jpg';

export default class Home extends Component {

  render() {
    return (
      <Container>
        <Row>
          <Col>
          <div className="about">
            <Row>
              <h2>
                I'm <span>Justice</span>, and I'm a <span>Full-Stack Web Engineer</span>.
              </h2>
              <h2>
                I make mobile and web apps using everything ranging from <span>JavaScript</span> (ES6+)
                and the <span>MERN</span> stack to <span>Dart</span> and <span>Flutter</span>.
              </h2>
            </Row>
          </div>
          <hr />
          <div className="portfolio">
            <Row>
              <p>Here are some of the projects I've worked on:</p>
            </Row>
            <Row>
              <Link to={'/'} style={{ width: '30%', color:'white' }}>
                <Card >
                  <Card.Body className="dark">
                    <Card.Title><p>He'inon</p></Card.Title>
                    <Card.Text style={{fontSize: '100%'}}>
                      An Arapaho language learning app.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Link>
            </Row>
          </div>
          <div className="contact">
            <Row id="contact">
              <p>
                For more info{" "}
                <a href="mailto:realjusticedunn@gmail.com">
                  <span>contact me</span>
                </a>
                {" "}or check me out in the links below!
              </p>
            </Row>
          </div>
          </Col>
          <Col className="d-none d-xl-block">
            <Image src={me} className="image" thumbnail/>
          </Col>
        </Row>
      </Container>
    );
  }
}
