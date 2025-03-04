import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Certificate map - specify how many certificates each category has
const certificateMap = {
  "AICTE": 3,
  "AWS":1,
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
  "ZSCALER": 2
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
    <div className="w-full h-screen bg-white flex flex-col items-center justify-start p-4">
      
      {/* Tab buttons */}
      <div className="w-full flex flex-wrap justify-center space-x-4 mb-6 gap-2">
        {Object.keys(certificateMap).map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-white font-semibold rounded-md ${
              activeCategory === category
                ? 'bg-purple-600'
                : 'bg-purple-300 hover:bg-purple-400'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category} ({certificateMap[category]})
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[80vh] max-w-[1200px] bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
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
          </>
        ) : (
          <p className="text-center text-gray-500 text-xl">No certificates available.</p>
        )}
      </div>
    </div>
  );
};

export default Certify;
