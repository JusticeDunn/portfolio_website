import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

import "./blog.css";

export default class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/blogs/")
      .then((res) => {
        this.setState({
          blogs: res.data.map((blog) => blog),
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  blogList() {
    return this.state.blogs.map((currentBlog) => {
      return <p>{currentBlog.title}</p>;
    });
  }

  render() {
    return (
      <Container>
        <p>Hello, Blog!</p>
        <Col>{this.blogList()}</Col>
      </Container>
    );
  }
}
