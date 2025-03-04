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

  useEffect(() => {
    if (certificates.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 1000);
    return () => clearInterval(interval);
  }, [certificates.length]);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-purple-800 text-white p-4">
   <motion.h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-white">
        Certificates Showcase
      </motion.h2>

      <motion.div className="text-lg md:text-xl font-semibold bg-purple-700 px-4 py-2 rounded-lg shadow-md text-white mb-4">
        Total Certificates: {totalCertificates}
      </motion.div>

      <div className="w-full flex justify-center flex-wrap gap-2 max-w-5xl mb-4">
        {Object.keys(certificateMap).map((category) => (
          <motion.button
            key={category}
            whileHover={{ scale: 1.1 }}
            className={`px-3 py-1 text-sm md:text-base font-semibold rounded-lg transition duration-300 ${
              activeCategory === category ? "bg-blue-600 text-white" : "bg-white text-black hover:bg-blue-500"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category} ({certificateMap[category]})
          </motion.button>
        ))}
      </div>

      <div className="relative w-full max-w-2xl h-[calc(100vh-12rem)] bg-white rounded-lg shadow-lg flex justify-center items-center overflow-hidden">
        {certificates.length > 0 ? (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentIndex}
              src={certificates[currentIndex]}
              alt={`Certificate ${currentIndex}`}
              className="w-full h-full object-contain p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        ) : (
          <motion.p className="text-center text-white text-xl">No certificates available.</motion.p>
        )}

        {certificates.length > 1 && (
          <>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length)}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-purple-700 p-2 rounded-full opacity-80 hover:opacity-100 transition duration-300"
            >
              <FaArrowLeft size={18} className="text-white" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => setCurrentIndex((prev) => (prev + 1) % certificates.length)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-purple-700 p-2 rounded-full opacity-80 hover:opacity-100 transition duration-300"
            >
              <FaArrowRight size={18} className="text-white" />
            </motion.button>
          </>
        )}
      </div>
    </div>
  );
};

export default Certify;
