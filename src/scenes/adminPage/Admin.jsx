import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

const password = process.env.REACT_APP_PASSWORD;
const username = process.env.REACT_APP_USERNAME;

export default class Blog extends Component {

  authorize() {
    if (document.querySelector('.username').value === username &&
        document.querySelector('.password').value === password) {
          localStorage.setItem('admin', true);
          window.location.replace('http://www.localhost:3000/');
        } else {
          window.alert(`Username/password not recognized!`);
          document.querySelector('.username').value = '';
          document.querySelector('.password').value = '';
        }
  }

  render() {
    return (
      <Container>
        <hr/>
        <Form className="text">
          <Form.Group controlId="formBasicEmail">
            <Form.Label className="text">Username</Form.Label>
            <Form.Control className="text username" type="username" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label className="text">Password</Form.Label>
            <Form.Control className="text password" type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" onClick={() => this.authorize()}>
            Login
          </Button>
        </Form>
        <hr/>
      </Container>
    );
  }
}
