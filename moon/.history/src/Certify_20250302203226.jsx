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

  useEffect(() => {
    const loadCertificates = () => {
      const numCertificates = certificateMap[activeCategory] || 0;
      const images = [];
      for (let i = 1; i <= numCertificates; i++) {
        images.push(`/Certificates/${activeCategory}/C${i}.jpg`);
      }
      setCertificates(images);
    };
    loadCertificates();
  }, [activeCategory]);

  return (
    <div className="w-full h-screen flex flex-col bg-gradient-to-br from-blue-800 to-blue-900 text-white p-4">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center bg-white text-blue-900 p-3 rounded-lg shadow-md">
        <h2 className="text-xl font-bold">Certificates Showcase</h2>
        <span className="text-sm font-semibold">Total: {totalCertificates}</span>
      </div>

      {/* Category Selection */}
      <div className="w-full flex overflow-x-auto gap-2 py-2 mt-2 px-2">
        {Object.keys(certificateMap).map((category, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.1 }}
            className={`px-4 py-2 text-sm font-semibold rounded-lg transition duration-300 whitespace-nowrap ${
              activeCategory === category ? "bg-indigo-500" : "bg-gray-500 hover:bg-indigo-400"
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category} ({certificateMap[category]})
          </motion.button>
        ))}
      </div>

      {/* Horizontal Slider */}
      <div className="relative w-full flex-grow flex items-center justify-center overflow-hidden">
        {certificates.length > 0 ? (
          <div className="w-full max-w-5xl flex items-center gap-4 overflow-x-auto snap-x scroll-smooth p-4">
            {certificates.map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`Certificate ${index}`}
                className="w-64 h-80 object-cover rounded-lg shadow-lg snap-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 text-2xl">No certificates available.</p>
        )}
      </div>
    </div>
  );
};

export default Certify;