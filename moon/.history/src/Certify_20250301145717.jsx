import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import certificatesData from './assets/certificates.json'; // Import the certificates JSON file

const Certify = () => {
  const [activeCategory, setActiveCategory] = useState("AICTE");
  const [certificates, setCertificates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Set certificates based on active category
  useEffect(() => {
    const categoryData = certificatesData.certificates.find(
      (cert) => cert.category === activeCategory
    );
    if (categoryData) {
      setCertificates(categoryData.files);
    }
  }, [activeCategory]);

  // Automatic carousel change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [certificates.length]);

  // Handle the tab change
  const handleTabChange = (category) => {
    setActiveCategory(category);
    setCurrentIndex(0); // Reset carousel to first certificate when category changes
  };

  return (
    <div className="w-full h-screen bg-white flex flex-col items-center justify-start p-4">
      {/* Tab buttons */}
      <div className="w-full flex justify-center space-x-4 mb-6">
        {certificatesData.certificates.map((cert, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-white font-semibold rounded-md ${
              activeCategory === cert.category
                ? 'bg-purple-600'
                : 'bg-purple-300 hover:bg-purple-400'
            }`}
            onClick={() => handleTabChange(cert.category)}
          >
            {cert.category}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[80vh] max-w-[1200px] bg-gray-100 rounded-md overflow-hidden">
        {certificates.length > 0 && (
          <>
            {/* Certificate Image */}
            <img
              src={`./assets/Certificates/${activeCategory}/${certificates[currentIndex]}`}
              alt={`Certificate ${currentIndex}`}
              className="w-full h-full object-cover"
            />

            {/* Navigation arrows */}
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length)}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-purple-600 p-2 rounded-full"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length)}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-purple-600 p-2 rounded-full"
            >
              <FaArrowRight />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Certify;
