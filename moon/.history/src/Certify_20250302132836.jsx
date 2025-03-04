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
    }, 3000);
    return () => clearInterval(interval);
  }, [certificates.length]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white p-6">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certificates Showcase
      </motion.h2>

      <motion.div
        className="w-full max-w-7xl flex overflow-x-auto space-x-3 py-4 px-4 bg-gray-700 rounded-lg shadow-lg scrollbar-hide"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {Object.keys(certificateMap).map((category, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition duration-300 ${
              activeCategory === category ? "bg-indigo-500" : "bg-gray-500 hover:bg-indigo-400"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category} ({certificateMap[category]})
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="relative w-full max-w-6xl h-[70vh] bg-white rounded-lg shadow-lg flex justify-center items-center mt-6 overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {certificates.length > 0 ? (
          <>
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
            {certificates.length > 1 && (
              <>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onClick={() =>
                    setCurrentIndex(
                      (prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-4 rounded-full opacity-70 hover:opacity-100 transition duration-200"
                >
                  <FaArrowLeft size={24} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  onClick={() =>
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length)
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-4 rounded-full opacity-70 hover:opacity-100 transition duration-200"
                >
                  <FaArrowRight size={24} />
                </motion.button>
              </>
            )}
          </>
        ) : (
          <motion.p
            className="text-center text-gray-500 text-2xl"
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
