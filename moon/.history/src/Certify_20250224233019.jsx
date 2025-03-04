import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css"; // Don't forget to import Swiper styles!

const Certify = () => {
  const [certificates, setCertificates] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(Object.keys(certificates || {})[0]); // Default active tab

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        console.log("📡 Fetching certificates...");
        setLoading(true);
        setError(null);

        const response = await fetch("/certificates.json");

        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (!data || typeof data !== "object" || Object.keys(data).length === 0) {
          throw new Error("Invalid or empty certificate data.");
        }

        console.log("✅ Certificates successfully fetched:", data);
        setCertificates(data);
        setActiveTab(Object.keys(data)[0]); // Set the first category as active by default
      } catch (err) {
        console.error("❌ Error fetching certificates:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) return <div className="text-center text-blue-500">⏳ Loading certificates...</div>;

  if (error) return <div className="text-center text-red-500 font-bold">❌ Error: {error}</div>;

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">📜 Certificates</h2>
      <div className="tabs">
        <div className="flex justify-center space-x-4 mb-6">
          {Object.keys(certificates).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`py-2 px-4 rounded-t-lg ${
                activeTab === category ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div>
        {certificates[activeTab] && (
          <div className="certificate-slider">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="mySwiper"
            >
              {certificates[activeTab].map((cert, index) => (
                <SwiperSlide key={index}>
                  <div className="border p-4 rounded shadow">
                    <h4 className="font-medium text-center">{cert.name || "Unnamed Certificate"}</h4>
                    <img
                      src={cert.url || "https://via.placeholder.com/300?text=No+Image"}
                      alt={cert.name || "Certificate Image"}
                      className="w-full h-auto rounded"
                      onError={(e) => {
                        console.error(`⚠️ Error loading image: ${cert.url}`);
                        e.target.src = "https://via.placeholder.com/300?text=Image+Not+Available";
                      }}
                    />
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center mt-2 text-blue-500 underline"
                      >
                        🔗 View Certificate
                      </a>
                    ) : (
                      <p className="text-center text-gray-500">⚠️ No URL available</p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certify;
