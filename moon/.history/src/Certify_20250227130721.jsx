import React, { useState, useEffect } from 'react';

// Use Vite's dynamic import feature to gather all certificates
const certificateFiles = import.meta.glob('/certificates/*/*.{jpg,png,jpeg,pdf}', { eager: true });

const Certify = () => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    // Organize the certificates by their respective folders (organizations)
    const organizedCertificates = Object.entries(certificateFiles).map(([path, file]) => {
      const parts = path.split('/'); // Get parts of the path
      const organizationName = parts[2]; // The organization name from the folder
      const certificateName = parts[3]; // The certificate filename

      return {
        organization: organizationName,
        certificate: file, // Vite provides the certificate file directly here
        certificateName,
      };
    });

    setCertificates(organizedCertificates);
  }, []);

  return (
    <div>
      <h2>My Certificates</h2>
      {certificates.map((cert, index) => (
        <div key={index}>
          <h3>{cert.organization}</h3>
          <img src={cert.certificate} alt={cert.certificateName} width={200} />
          <p>{cert.certificateName}</p>
        </div>
      ))}
    </div>
  );
};

export default Certify;
