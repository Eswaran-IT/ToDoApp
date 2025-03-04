import React, { useState, useEffect } from "react";

const Certify = () => {
  const [certificates, setCertificates] = useState({}); // State must match JSON object structure

  useEffect(() => {
    // Fetch certificates from JSON
    const fetchCertificates = async () => {
      try {
        const response = await fetch("/certificates.json"); // Ensure file is in the public folder
        const data = await response.json();
        setCertificates(data);
      } catch (error) {
        console.error("Error fetching certificates:", error);
      }
    };

    fetchCertificates();
  }, []);

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
