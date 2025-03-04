import React, { useState, useEffect } from "react";

const Certify = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Fetch certificates from the JSON file
    const fetchCertificates = async () => {
      try {
        const response = await fetch("/certificates.json"); // Ensure this file is in your public folder
        const data = await response.json();
        setCertificates(data); // Store the entire JSON object
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
            {certificates[category].map((cert) => (
              <div key={cert.id} className="border p-2 rounded shadow">
                <h4 className="font-medium text-center">{cert.name}</h4>
                {cert.mimeType === "application/pdf" ? (
                  <iframe
                    src={cert.url}
                    width="100%"
                    height="200px"
                    title={cert.name}
                  ></iframe>
                ) : (
                  <img
                    src={cert.url}
                    alt={cert.name}
                    className="w-full h-auto rounded"
                  />
                )}
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
