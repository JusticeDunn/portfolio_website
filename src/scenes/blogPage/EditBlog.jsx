import React, { Component } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import qs from 'qs';
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
      axios({
        method: 'post',
        url: 'http://localhost:5000/blogs/createNewBlog',
        data: qs.stringify({
            title: document.querySelector('.title').value,
            contents: document.querySelector('.contents').value,
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        }
      })
    }

    edit() {
      axios({
        method: "patch",
        url: "http://localhost:5000/blogs",
        data: qs.stringify({
          _id: window.location.pathname.slice(6),
          newTitle: document.querySelector('.title').value,
          newContents: document.querySelector('.contents').value,
        }),
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      });
    }

    remove() {
      axios({
        method: "delete",
        url: "http://localhost:5000/blogs",
        data: qs.stringify({
          _id: window.location.pathname.slice(6),
        }),
        headers: {
          "content-type": "application/x-www-form-urlencoded;charset=utf-8",
        },
      });
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
                <Form.Control type="email" defaultValue={title} placeholder={"Blog Title"} className="title"/>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={8} defaultValue={contents} placeholder={"Blog Contents"} className="contents"/>
              </Form.Group>
            </Form>
            <Button onClick={() => action()}>{button}</Button>
            <Button onClick={() => this.remove()}>Delete</Button>
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
