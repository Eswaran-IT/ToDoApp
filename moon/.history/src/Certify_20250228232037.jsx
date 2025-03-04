import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import './App.css';  // Import the slick carousel styles
import './tailwind.output.css'; // Assuming you are using Tailwind CSS

const Certify = () => {
  const [activeCategory, setActiveCategory] = useState("AICTE");

  // Categories (Folder Names)
  const categories = [
    "AICTE", "AWS", "Cisco", "Coursera", "EC-Council", "Geekstar", "GUVI", "INFOSYS", "INTERNSHALA", "ISTE",
    "Linkedin", "MICROSOFT", "NPTEL", "SCALER", "TCS", "TRYHACKME", "UDEMY", "ZSCALER", "OTHERS"
  ];

  // Certificates (Example, you can fetch dynamically)
  const certificates = {
    AICTE: ['C1.jpg', 'C2.jpg'],
    AWS: ['C1.jpg', 'C2.jpg'],
    // Add other categories with their respective certificates
    OTHERS: ['C1.jpg', 'C2.jpg']
  };

  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,  // 3 seconds duration
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="w-full h-screen bg-white p-4">
      {/* Tabs for Categories */}
      <div className="flex overflow-x-auto space-x-4 mb-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-6 py-2 rounded-lg ${activeCategory === category ? 'bg-purple-500 text-white' : 'bg-white text-purple-500'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Carousel for Certificates */}
      <div className="carousel-container w-full h-full">
        <Slider {...settings}>
          {certificates[activeCategory]?.map((cert, index) => (
            <div key={index}>
              <img 
                src={`./assets/Certificates/${activeCategory}/${cert}`} 
                alt={`Certificate ${index + 1}`} 
                className="w-full h-full object-contain" 
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Certify;
