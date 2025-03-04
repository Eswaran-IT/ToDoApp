import React, { useState, useEffect } from "react";

const Certify = () => {
  const [certificates, setCertificates] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState(""); // Track active category
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current certificate index

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        console.log("📡 Fetching certificates...");
        setLoading(true);
        setError(null);

        // Fetch certificates only once (page load or refresh)
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
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <div className="text-center text-purple-800">⏳ Loading certificates...</div>;

  if (error) return <div className="text-center text-red-500 font-bold">❌ Error: {error}</div>;

  return (
    <div className="h-screen bg-white">
      <h2 className="text-center text-3xl font-bold text-purple-800 py-4">📜 Certificates</h2>

      {/* Tab Navigation for Categories */}
      <div className="flex justify-center mb-6 bg-purple-800 text-white rounded-lg shadow-lg py-2">
        {Object.keys(certificates).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`py-2 px-6 rounded-lg text-lg font-semibold ${
              activeTab === category ? "bg-white text-purple-800" : "hover:bg-purple-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Certificates Slider */}
      <div className="h-[calc(100vh-8rem)] overflow-hidden relative">
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap bg-gray-100">
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {certificates[activeTab]?.map((cert, index) => (
              <div
                key={index}
                className="flex-none w-full h-full px-6 py-6 bg-white rounded-lg shadow-xl mx-2"
              >
                <h4 className="font-medium text-center text-purple-800 mb-4">{cert.name || "Unnamed Certificate"}</h4>
                <img
                  src={cert.url || "https://via.placeholder.com/300?text=No+Image"}
                  alt={cert.name || "Certificate Image"}
                  className="w-full h-60 object-cover rounded-lg mb-4"
                  onError={(e) => {
                    console.error(`⚠️ Error loading image: ${cert.url}`);
                    e.target.src = "https://via.placeholder.com/300?text=Image+Not+Available";
                  }}
                />
                <div className="text-center">
                  {cert.url ? (
                    <img
                      src={cert.url}
                      alt={cert.name || "Certificate"}
                      className="w-full h-auto rounded-lg"
                    />
                  ) : (
                    <p className="text-gray-500">⚠️ No URL available</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Left and Right navigation arrows */}
        <button
          onClick={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-purple-800 text-white p-3 rounded-full shadow-lg"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrentIndex(Math.min(currentIndex + 1, certificates[activeTab].length - 1))}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-purple-800 text-white p-3 rounded-full shadow-lg"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Certify;
