import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scenes/homePage/Home";
import Blog from "./scenes/blogPage/Blog";
import NavBar from './components/navbar/navbar';
import OnePost from './scenes/blogPage/OnePost';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/blog" component={Blog} />
          <Route path="/:slug" component={OnePost} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
