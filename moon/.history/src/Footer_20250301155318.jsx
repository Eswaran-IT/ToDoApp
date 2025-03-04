import React from "react";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-gray-900 text-white py-4 mt-8 relative">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Eswaran Suyamprakasam. All rights reserved.</p>
        
        {/* Scroll to top button */}
        <button
          onClick={scrollToTop}
          className="absolute bottom-4 right-4 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
        >
          Back to Top
        </button>
      </div>
    </div>
  );
};

export default Footer;
