import React, { Component } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import './blog.css';

export default class Edit extends Component {
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

    post() {
      window.alert('post');
    }

    edit() {
      window.alert('edit');
    }

    blog() {
        let title;
        let contents;
        let button = "Post"
        let action = this.post;

        this.state.blogs.map((currentBlog) => {
          if ('/edit/' + currentBlog._id === window.location.pathname) {
            title = currentBlog.title;
            contents = currentBlog.contents;
            button = "Edit";
            action = this.edit;
          }
        });

        return (
          <Container>
            <hr/>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="email" defaultValue={title} placeholder={"Blog Title"} />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} defaultValue={contents} placeholder={"Blog Contents"}/>
              </Form.Group>
            </Form>
            <Button onClick={() => action()}>{button}</Button>
          </Container>
        );
      }

    render() {
        return (
            <Container>
              {this.blog()}
            </Container>
        )
    }
}
