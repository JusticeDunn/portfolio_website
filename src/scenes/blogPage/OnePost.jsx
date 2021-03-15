import React, { Component } from 'react';
import { Container, Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './blog.css';

export default class OnePost extends Component {
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

    adminControls(id) {
      return (
        <Row>
          <Link to={'/edit/' + id}>
            <Button>Edit</Button>
          </Link>
        </Row>
      );
    }

    blog() {
      let edit;

      return this.state.blogs.map((currentBlog) => {
        if ('/' + currentBlog._id === window.location.pathname) {
          // If admin is logged in, they will have the option to edit the blog
          if (localStorage.getItem('admin')) {
            edit = this.adminControls(currentBlog._id);
          } else {
            edit = null;
          }
          return (
            <Container>
              <h1 className="title">{currentBlog.title}</h1>
              <p>{currentBlog.contents}</p>
              {edit}
            </Container>
          );
        } else {
          return null;
        }
      });
    }

    render() {
        return (
            <Container>
                {this.blog()}
            </Container>
        )
    }
}
