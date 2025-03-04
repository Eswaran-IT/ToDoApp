import React, { useState, useEffect } from "react";

const Certify = () => {
  const [certificates, setCertificates] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        console.log("📡 Fetching certificates...");
        setLoading(true); 
        setError(null);  

        const response = await fetch("/certificates.json");

        // ❌ Handle HTTP response errors (404, 500, etc.)
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        const data = await response.json();

        // ❌ Check if JSON is empty or not structured properly
        if (!data || typeof data !== "object" || Object.keys(data).length === 0) {
          throw new Error("Invalid or empty certificate data.");
        }

        console.log("✅ Certificates successfully fetched:", data);
        setCertificates(data);
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

      {Object.keys(certificates).length === 0 ? (
        <p className="text-center text-gray-500">⚠️ No certificates available.</p>
      ) : (
        Object.keys(certificates).map((category) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-semibold">{category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {certificates[category].map((cert, index) => (
                <div key={index} className="border p-2 rounded shadow">
                  <h4 className="font-medium text-center">
                    {cert.name || "Unnamed Certificate"}
                  </h4>
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
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Certify;
