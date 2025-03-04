import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import './App.css';  // Import the slick carousel styles
import './tailwind.output.css'; // Assuming you are using Tailwind CSS

// Import certificates JSON
import certificatesData from './assets/certificates.json';

const Certify = () => {
  const [activeCategory, setActiveCategory] = useState("AICTE");
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Find the certificates for the active category
    const categoryData = certificatesData.certificates.find(
      (cert) => cert.category === activeCategory
    );
    if (categoryData) {
      setCertificates(categoryData.files);
    }
  }, [activeCategory]);

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

  // Categories (Extract from JSON)
  const categories = certificatesData.certificates.map(cert => cert.category);

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
          {certificates.map((cert, index) => (
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
