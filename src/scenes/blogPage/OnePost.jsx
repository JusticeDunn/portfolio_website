import React, { Component } from 'react'
import axios from 'axios';
import './blog.css'

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

    blog() {
      return this.state.blogs.map((currentBlog) => {
        if ('/' + currentBlog._id == window.location.pathname) {
          return (
            <div>
              <h1>{currentBlog.title}</h1>
              <p>{currentBlog.contents}</p>
            </div>
          );
        }
      });
    }

    render() {
        return (
            <div>
                <p>One Post!</p>
                {this.blog()}
            </div>
        )
    }
}
