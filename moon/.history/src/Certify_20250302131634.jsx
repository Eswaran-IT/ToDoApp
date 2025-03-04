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
    <div className="w-full h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 flex flex-col items-center justify-center p-0">

      {/* Card-style Total Certificates */}
      <div className="w-full max-w-md p-6 mb-8 bg-white bg-opacity-90 text-gray-900 rounded-2xl shadow-xl text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Total Certificates Across All Categories:
        </h2>
        <span className="text-3xl font-bold text-indigo-600">
          {Object.values(certificateMap).reduce((acc, count) => acc + count, 0)}
        </span>
      </div>

      {/* Tab buttons - Category Selection */}
      <div className="w-full flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(certificateMap).map((category, index) => (
          <button
            key={index}
            className={`px-5 py-2 text-lg text-white font-semibold rounded-lg transition duration-200 ease-in-out ${activeCategory === category ? 'bg-purple-600' : 'bg-gray-700 hover:bg-purple-500'}`}
            onClick={() => setActiveCategory(category)}
          >
            {category} ({certificateMap[category]})
          </button>
        ))}
      </div>

      {/* Carousel for Certificates */}
      <div className="relative w-full h-[70vh] max-w-[900px] bg-white rounded-2xl shadow-lg overflow-hidden flex justify-center items-center mb-8">
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
