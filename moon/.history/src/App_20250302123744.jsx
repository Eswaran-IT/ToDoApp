import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

        {/* Main Content - Switch between different routes */}
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/certify" element={<Certify />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer Section */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
