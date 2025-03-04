// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./NavBar";  // Assuming NavBar component is correct
import About from "./About";    // Assuming About component is correct

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        {/* Routing to About */}
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
