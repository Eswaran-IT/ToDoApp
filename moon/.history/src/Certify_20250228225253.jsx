import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificateFolders = [
  "AICTE", "AWS", "Cisco", "Coursera", "EC-Council", "Geekstar", "GUVI",
  "INFOSYS", "INTERNSHALA", "Internship", "ISTE", "Linkedin", "MICROSOFT",
  "NPTEL", "OTHERS", "SCALER", "TCS", "TRYHACKME", "UDEMY", "ZSCALER"
];

const Certificates = () => {
  const [selectedOrg, setSelectedOrg] = useState(certificateFolders[0]);

  const certificates = [{
    name: selectedOrg,
    image: `/src/assets/Certificates/${selectedOrg}/certificate.jpg`, // Adjust file format if needed
  }];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex overflow-x-auto bg-white p-4 shadow-md">
        {certificateFolders.map((folder) => (
          <button
            key={folder}
            onClick={() => setSelectedOrg(folder)}
            className={`px-4 py-2 mx-2 rounded-md ${selectedOrg === folder ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          >
            {folder}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center flex-grow">
        <div className="w-3/4 h-[100vh] flex flex-col items-center justify-center bg-white p-6 shadow-lg rounded-lg">
          <Slider {...settings} className="w-full">
            {certificates.map((cert, index) => (
              <div key={index} className="flex flex-col items-center">
                <h2 className="text-2xl font-semibold">{cert.name}</h2>
                <img src={cert.image} alt={cert.name} className="w-3/4 h-auto rounded-lg shadow-md" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Certify;
