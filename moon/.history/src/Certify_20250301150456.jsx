import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import certificatesData from '../assets/certificates.json'; // Import JSON

const Certify = () => {
  const [activeCategory, setActiveCategory] = useState("AICTE");
  const [certificates, setCertificates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load certificates when category changes
  useEffect(() => {
    const categoryData = certificatesData.certificates.find(
      (cert) => cert.category === activeCategory
    );
    setCertificates(categoryData ? categoryData.files : []);
    setCurrentIndex(0); // Reset index
  }, [activeCategory]);

  // Auto-slide only if multiple certificates
  useEffect(() => {
    if (certificates.length <= 1) return; // No auto-slide if only one image

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [certificates.length]);

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
            onClick={() => setActiveCategory(cert.category)}
          >
            {cert.category}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative w-full h-[80vh] max-w-[1200px] bg-gray-100 rounded-md overflow-hidden flex items-center justify-center">
        {certificates.length > 0 ? (
          <>
            {/* Certificate Image */}
            <img
              src={`/Certificates/${activeCategory}/${certificates[currentIndex]}`}
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
