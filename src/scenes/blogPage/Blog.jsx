import React, { Component } from "react";
import { Container, Row, Card, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
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
        return (
          <Card style={{ width: '30%', backgroundColor: 'gray', color:'white' }}>
            <Card.Body>
              <Card.Title>{currentBlog.title}</Card.Title>
              <Card.Text>
                {currentBlog.contents.slice(0, currentBlog.contents.indexOf('! '))}...
              </Card.Text>
              <Link to={'/' + currentBlog._id}>
                <Button variant="primary">Read</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      });
  }

  render() {
    return (
      <Container>
        <p>All Blog Posts</p>
        <Row>{this.blogList()}</Row>
      </Container>
    );
  }
}
