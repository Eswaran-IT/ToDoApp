import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

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

const totalCertificates = Object.values(certificateMap).reduce((acc, count) => acc + count, 0);

const Certify = () => {
  const [activeCategory, setActiveCategory] = useState("AICTE");
  const [certificates, setCertificates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadCertificates = () => {
      const numCertificates = certificateMap[activeCategory] || 0;
      const images = [];
      for (let i = 1; i <= numCertificates; i++) {
        images.push(`/Certificates/${activeCategory}/C${i}.jpg`);
      }
      setCertificates(images);
      setCurrentIndex(0);
    };
    loadCertificates();
  }, [activeCategory]);

  useEffect(() => {
    if (certificates.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [certificates.length]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 text-white p-6">
      <motion.h2
        className="text-4xl font-extrabold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certificates Showcase
      </motion.h2>

      <div className="text-lg font-semibold mb-4 bg-white text-blue-900 p-3 rounded-xl shadow-lg">
        Total Certificates: <span className="font-bold">{totalCertificates}</span>
      </div>

      {/* Category Buttons */}
      <motion.div
        className="w-full flex justify-center gap-2 flex-wrap max-w-5xl mb-6 overflow-auto p-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {Object.keys(certificateMap).map((category, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition duration-300 ${
              activeCategory === category ? "bg-yellow-500 text-black" : "bg-gray-600 hover:bg-yellow-400"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category} ({certificateMap[category]})
          </motion.button>
        ))}
      </motion.div>

      {/* Certificate Display */}
      <motion.div
        className="relative w-full max-w-4xl h-[65vh] bg-white rounded-xl shadow-lg flex justify-center items-center overflow-hidden p-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {certificates.length > 0 ? (
          <>
            <motion.img
              key={currentIndex}
              src={certificates[currentIndex]}
              alt={`Certificate ${currentIndex + 1}`}
              className="w-auto h-[90%] object-contain rounded-lg shadow-md"
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
                      (prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/70 p-4 rounded-full opacity-80 hover:opacity-100 transition duration-200"
                >
                  <FaArrowLeft size={24} className="text-white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onClick={() =>
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length)
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/70 p-4 rounded-full opacity-80 hover:opacity-100 transition duration-200"
                >
                  <FaArrowRight size={24} className="text-white" />
                </motion.button>
              </>
            )}

            {/* Dots Indicator */}
            <div className="absolute bottom-4 flex gap-2">
              {certificates.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-yellow-500 scale-125" : "bg-gray-400"
                  }`}
                ></div>
              ))}
            </div>
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
