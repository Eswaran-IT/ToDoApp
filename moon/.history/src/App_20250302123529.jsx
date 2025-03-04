import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Certify from './Certify';
import Contact from './Contact';
import Footer from './Footer';
import NavBar from './NavBar';
import Projects from './Projects';
import Skills from './Skills';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation Bar */}
        <NavBar />

        {/* Switch between different routes */}
        <Switch>
          <Route exact path="/" component={About} />
          <Route path="/certify" component={Certify} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          {/* You can add more routes as needed */}
        </Switch>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
