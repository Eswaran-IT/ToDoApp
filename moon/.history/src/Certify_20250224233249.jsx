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

  if (loading) return <div className="text-center text-blue-500">⏳ Loading certificates...</div>;

  if (error) return <div className="text-center text-red-500 font-bold">❌ Error: {error}</div>;

  return (
    <div className="h-screen bg-gray-100">
      <h2 className="text-center text-2xl font-bold py-4">📜 Certificates</h2>

      {/* Tab Navigation for Categories */}
      <div className="flex justify-center mb-4 bg-gray-200 py-2">
        {Object.keys(certificates).map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`py-2 px-4 rounded-t-lg ${
              activeTab === category ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Certificates Slider */}
      <div className="h-[calc(100vh-5rem)] overflow-hidden relative">
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap">
          <div className="flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {certificates[activeTab]?.map((cert, index) => (
              <div
                key={index}
                className="flex-none w-full h-full px-4 py-6 bg-white border shadow rounded-lg mx-2"
              >
                <h4 className="font-medium text-center mb-2">{cert.name || "Unnamed Certificate"}</h4>
                <img
                  src={cert.url || "https://via.placeholder.com/300?text=No+Image"}
                  alt={cert.name || "Certificate Image"}
                  className="w-full h-48 object-cover rounded mb-2"
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
                    className="block text-center text-blue-500 underline"
                  >
                    🔗 View Certificate
                  </a>
                ) : (
                  <p className="text-center text-gray-500">⚠️ No URL available</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Left and Right navigation arrows */}
        <button
          onClick={() => setCurrentIndex(Math.max(currentIndex - 1, 0))}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrentIndex(Math.min(currentIndex + 1, certificates[activeTab].length - 1))}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Certify;
