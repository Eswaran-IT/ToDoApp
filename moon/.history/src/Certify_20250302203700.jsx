import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const certificateMap = {
  AICTE: 3, AWS: 1, Cisco: 2, Coursera: 1, "EC-Council": 1, Geekstar: 1, 
  GUVI: 3, INFOSYS: 5, INTERNSHALA: 3, ISTE: 2, Linkedin: 4, MICROSOFT: 4, 
  NPTEL: 1, OTHERS: 32, SCALER: 1, TCS: 4, TRYHACKME: 3, UDEMY: 5, ZSCALER: 3,
};

const totalCertificates = Object.values(certificateMap).reduce((acc, count) => acc + count, 0);

const Certify = () => {
  const [activeCategory, setActiveCategory] = useState("AICTE");
  const [certificates, setCertificates] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadCertificates = () => {
      const numCertificates = certificateMap[activeCategory] || 0;
      const images = Array.from({ length: numCertificates }, (_, i) => `/Certificates/${activeCategory}/C${i + 1}.jpg`);
      setCertificates(images);
      setCurrentIndex(0);
    };
    loadCertificates();
  }, [activeCategory]);

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4">
      {/* Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Certificates Showcase
      </motion.h2>

      {/* Total Certificates Count */}
      <motion.div
        className="text-lg md:text-xl font-semibold bg-gray-700 px-4 py-2 rounded-lg shadow-md text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Total Certificates: {totalCertificates}
      </motion.div>

      {/* Category Selection */}
      <div className="w-full flex justify-center flex-wrap gap-2 max-w-5xl mb-4">
        {Object.keys(certificateMap).map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.1 }}
            className={`px-3 py-1 text-sm md:text-base font-semibold rounded-lg transition duration-300 ${
              activeCategory === category ? "bg-blue-600" : "bg-gray-600 hover:bg-blue-500"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category} ({certificateMap[category]})
          </motion.button>
        ))}
      </div>

      {/* Certificate Display */}
      <div className="relative w-full max-w-3xl h-[70vh] md:h-[75vh] flex justify-center items-center bg-gray-200 rounded-lg shadow-xl overflow-hidden">
        {certificates.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={certificates[currentIndex]}
              alt={`Certificate ${currentIndex}`}
              className="w-full h-full object-contain"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        ) : (
          <motion.p
            className="text-center text-gray-600 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No certificates available.
          </motion.p>
        )}

        {/* Navigation Buttons */}
        {certificates.length > 1 && (
          <>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full opacity-80 hover:opacity-100 transition duration-300"
            >
              <FaArrowLeft size={20} className="text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              onClick={() => setCurrentIndex((prev) => (prev + 1) % certificates.length)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full opacity-80 hover:opacity-100 transition duration-300"
            >
              <FaArrowRight size={20} className="text-white" />
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
};

export default Certify;
