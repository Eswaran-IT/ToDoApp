import React, { useState, useEffect } from "react";

const Certify = () => {
  const [certificates, setCertificates] = useState(null); // Set initial state to null
  const [error, setError] = useState(null); // To store fetch errors

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        console.log("Fetching certificates..."); // Debugging log
        const response = await fetch("/certificates.json");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Certificates fetched:", data); // Debugging log
        setCertificates(data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
        setError(error.message); // Store error in state
      }
    };

    fetchCertificates();
  }, []);

  if (error) {
    return (
      <div className="text-center text-red-500 font-bold">
        ❌ Error: {error}
      </div>
    );
  }

  if (certificates === null) {
    return <div className="text-center">Loading certificates...</div>;
  }

  return (
    <div>
      <h2 className="text-center text-2xl font-bold">Certificates</h2>
      {Object.keys(certificates).map((category) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-semibold">{category}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {certificates[category].map((cert, index) => (
              <div key={index} className="border p-2 rounded shadow">
                <h4 className="font-medium text-center">{cert.name}</h4>
                <img
                  src={cert.url}
                  alt={cert.name}
                  className="w-full h-auto rounded"
                  onError={(e) => {
                    console.error(`Error loading image: ${cert.url}`);
                    e.target.src = "https://via.placeholder.com/300?text=Image+Not+Found";
                  }}
                />
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center mt-2 text-blue-500 underline"
                >
                  View Certificate
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certify;
