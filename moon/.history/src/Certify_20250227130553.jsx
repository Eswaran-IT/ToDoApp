import React, { useState, useEffect } from 'react';

// Dynamic import to get all certificate files under each organization
const certificateFiles = import.meta.glob('/public/certificates/*/*.{jpg,png,jpeg,pdf}', { eager: true });

const Certify = () => {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        // Iterate over the dynamically imported files and organize them
        const organizedCertificates = Object.entries(certificateFiles).map(([path, file]) => {
            const organizationName = path.split('/')[2]; // Get the organization name from the folder path
            const certificateName = path.split('/').pop(); // Get the certificate file name

            return {
                organization: organizationName,
                certificate: file,
                certificateName
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
