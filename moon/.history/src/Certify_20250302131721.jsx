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
    <div className="w-full h-screen bg-white flex flex-col items-center justify-center p-6">

      {/* Total Certificates Card */}
      <div className="w-full max-w-xs p-4 mb-6 bg-white text-gray-900 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Total</h2>
        <span className="text-4xl font-bold text-indigo-600">
          {Object.values(certificateMap).reduce((acc, count) => acc + count, 0)}
        </span>
      </div>

      {/* Tab buttons - Category Selection */}
      <div className="w-full flex flex-wrap justify-center gap-3 mb-6">
        {Object.keys(certificateMap).map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm text-white font-semibold rounded-lg transition duration-200 ease-in-out ${
              activeCategory === category
                ? 'bg-purple-600'
                : 'bg-gray-500 hover:bg-purple-500'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category} ({certificateMap[category]})
          </button>
        ))}
      </div>

      {/* Carousel for Certificates */}
      <div className="relative w-full h-[60vh] max-w-md bg-white rounded-lg shadow-md overflow-hidden flex justify-center items-center">
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
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-purple-600 p-4 rounded-full opacity-70 hover:opacity-100 transition duration-200"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length)}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-purple-600 p-4 rounded-full opacity-70 hover:opacity-100 transition duration-200"
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
