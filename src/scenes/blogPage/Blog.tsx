import React, { Component } from "react";
import axios from "axios";

import "./blog.css";

export default class Home extends Component {

    componentDidMount() {
        axios
          .get("http://localhost:5000/blogs/")
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }

    render() {
        return <h1>Hello, Blog!</h1>
    }
}