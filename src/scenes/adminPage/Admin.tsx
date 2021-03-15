import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <hr/>
        <Form className="text">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text">Email address</Form.Label>
            <Form.Control className="text" type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="text">Password</Form.Label>
            <Form.Control className="text" type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
        <hr/>
      </Container>
    );
  }
}
