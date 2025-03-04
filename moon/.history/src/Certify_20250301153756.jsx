import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Certificate map - specify how many certificates each category has
const certificateMap = {
  "AICTE": 3,
  "AWS": 1,
  "Cisco": 2,
  "Coursera": 1,
  "EC-Council": 1,
  "Geekstar": 1,
  "GUVI": 3,
  "INFOSYS": 5,
  "INTERNSHALA": 3,
  "ISTE": 2,
  "Linkedin": 4,
  "MICROSOFT": 4,
  "NPTEL": 1,
  "OTHERS": 32,
  "SCALER": 1,
  "TCS": 4,
  "TRYHACKME": 3,
  "UDEMY": 5,
  "ZSCALER": 3
};

const Certify = () => {
  const [activeCategory, setActiveCategory] = useState("AICTE");
  const [certificates, setCertificates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dynamically load certificates based on the selected category
  useEffect(() => {
    const loadCertificates = () => {
      const numCertificates = certificateMap[activeCategory] || 0;
      const images = [];
      for (let i = 1; i <= numCertificates; i++) {
        images.push(`/Certificates/${activeCategory}/C${i}.jpg`);
      }
      setCertificates(images);
      setCurrentIndex(0); // Reset to first certificate
    };

    loadCertificates();
  }, [activeCategory]);

  // Auto-slide only if multiple certificates
  useEffect(() => {
    if (certificates.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [certificates.length]);

  return (
    <div className="w-full h-screen bg-gray-50 flex flex-col items-center justify-start p-4">

      {/* Card-style Total Certificates */}
      <div className="w-full max-w-md p-4 mb-6 bg-purple-600 text-white rounded-lg shadow-xl text-center">
        <h2 className="text-xl font-semibold">
          Total Certificates Across All Categories: 
          <span className="text-2xl font-bold">
            {Object.values(certificateMap).reduce((acc, count) => acc + count, 0)}
          </span>
        </h2>
      </div>

      {/* Tab buttons - Category Selection */}
      <div className="w-full flex flex-wrap justify-center gap-3 mb-6">
        {Object.keys(certificateMap).map((category, index) => (
          <button
            key={index}
            className={`px-3 py-1 text-sm text-gray-800 font-semibold rounded-md transition duration-200 ease-in-out ${
              activeCategory === category
                ? 'bg-purple-600 text-white'
                : 'bg-gray-200 hover:bg-purple-500 hover:text-white'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category} ({certificateMap[category]})
          </button>
        ))}
      </div>

      {/* Carousel for Certificates */}
      <div className="relative w-full h-[70vh] max-w-[900px] bg-white rounded-lg shadow-lg overflow-hidden flex justify-center items-center mb-8">
        {certificates.length > 0 ? (
          <>
            {/* Certificate Image */}
            <img
              src={certificates[currentIndex]}
              alt={`Certificate ${currentIndex}`}
              className="w-full h-full object-contain"
            />

            {/* Show arrows only if there are multiple images */}
            {certificates.length > 1 && (
              <>
                <button
                  onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length)}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-purple-600 p-2 rounded-full"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length)}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-purple-600 p-2 rounded-full"
                >
                  <FaArrowRight />
                </button>
              </>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500 text-xl">No certificates available.</p>
        )}
      </div>
    </div>
  );
};

export default Certify;
