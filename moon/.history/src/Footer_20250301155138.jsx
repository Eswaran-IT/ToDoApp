import React from "react";
import { FaArrowUp } from "react-icons/fa"; // Import the up arrow icon

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-gray-900 text-white py-4 mt-8 relative">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        
        {/* Scroll to top arrow */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-4 right-4 bg-purple-600 p-2 rounded-full text-white hover:bg-purple-700 transition duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      </div>
    </div>
  );
};

export default Footer;
