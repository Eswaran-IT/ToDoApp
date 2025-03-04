import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./NavBar";
import About from "./About";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
