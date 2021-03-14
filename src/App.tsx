import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./scenes/homePage/Home";
import Blog from "./scenes/blogPage/Blog";
import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import OnePost from './scenes/blogPage/OnePost';
import Admin from './scenes/adminPage/Admin';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/blog" component={Blog} />
          <Route path="/admin" component={Admin} />
          <Route path="/:slug" component={OnePost} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
