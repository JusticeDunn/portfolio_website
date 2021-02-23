import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scenes/homePage/Home.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
