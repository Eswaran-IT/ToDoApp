import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

// Certificate map - specify how many certificates each category has
const certificateMap = {
  AICTE: 3,
  AWS: 1,
  Cisco: 2,
  Coursera: 1,
  "EC-Council": 1,
  Geekstar: 1,
  GUVI: 3,
  INFOSYS: 5,
  INTERNSHALA: 3,
  ISTE: 2,
  Linkedin: 4,
  MICROSOFT: 4,
  NPTEL: 1,
  OTHERS: 32,
  SCALER: 1,
  TCS: 4,
  TRYHACKME: 3,
  UDEMY: 5,
  ZSCALER: 3,
};

const Certify = () => {
  const [activeCategory, setActiveCategory] = useState("AICTE");
  const [certificates, setCertificates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Load certificates based on selected category
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
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 to-indigo-600 p-6">
      
      {/* Total Certificates Count */}
      <motion.div
        className="w-full max-w-xs p-4 mb-6 bg-white text-gray-900 rounded-lg shadow-md text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Total</h2>
        <motion.span
          className="text-4xl font-bold text-indigo-600"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          {Object.values(certificateMap).reduce((acc, count) => acc + count, 0)}
        </motion.span>
      </motion.div>

      {/* Category Selection Buttons */}
      <motion.div
        className="w-full flex flex-wrap justify-center gap-3 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {Object.keys(certificateMap).map((category, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            className={`px-4 py-2 text-sm text-white font-semibold rounded-lg transition duration-300 ${
              activeCategory === category
                ? "bg-purple-700"
                : "bg-gray-500 hover:bg-purple-500"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category} ({certificateMap[category]})
          </motion.button>
        ))}
      </motion.div>

      {/* Certificate Carousel */}
      <motion.div
        className="relative w-full h-[60vh] max-w-md bg-white rounded-lg shadow-md overflow-hidden flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {certificates.length > 0 ? (
          <>
            {/* Sliding Image Animation */}
            <motion.img
              key={currentIndex}
              src={certificates[currentIndex]}
              alt={`Certificate ${currentIndex}`}
              className="w-full h-full object-contain"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
            />

            {/* Navigation Arrows */}
            {certificates.length > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onClick={() =>
                    setCurrentIndex(
                      (prevIndex) =>
                        (prevIndex - 1 + certificates.length) %
                        certificates.length
                    )
                  }
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-purple-600 p-4 rounded-full opacity-70 hover:opacity-100 transition duration-200"
                >
                  <FaArrowLeft />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onClick={() =>
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length)
                  }
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-purple-600 p-4 rounded-full opacity-70 hover:opacity-100 transition duration-200"
                >
                  <FaArrowRight />
                </motion.button>
              </>
            )}
          </>
        ) : (
          <motion.p
            className="text-center text-gray-500 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No certificates available.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
};

export default Certify;
