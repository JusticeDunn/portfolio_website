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
          <Link to={'/' + currentBlog._id} style={{ width: '30%', color:'white', padding: '5px'}}>
            <Card >
              <Card.Body className="dark">
                <Card.Title>{currentBlog.title}</Card.Title>
                <Card.Text>
                  {currentBlog.contents.slice(0, currentBlog.contents.indexOf('! '))}...
                </Card.Text>
              </Card.Body>
            </Card>
          </Link>
        );
      });
  }

  render() {

    let button = <p></p>;

    if (localStorage.getItem('admin')) {
      button = (
        <Link to='/edit'>
          <Button>New Blog</Button>
        </Link>
      );
    }

    return (
      <Container>
        <p>All Blog Posts</p>
        {button}
        <Row>{this.blogList()}</Row>
      </Container>
    );
  }
}
