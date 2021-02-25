import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scenes/homePage/Home.jsx";
import NavBar from './components/navbar/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
