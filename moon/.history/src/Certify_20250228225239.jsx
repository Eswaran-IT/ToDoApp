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

  // Generate certificate paths dynamically based on the selected organization
  const certificateImages = Array.from({ length: 10 }, (_, i) => `/src/assets/Certificates/${selectedOrg}/certificate${i + 1}.jpg`);

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
      {/* Tab View for Organization Selection */}
      <div className="flex overflow-x-auto bg-white p-4 shadow-md sticky top-0 z-10">
        {certificateFolders.map((folder) => (
          <button
            key={folder}
            onClick={() => setSelectedOrg(folder)}
            className={`px-4 py-2 mx-2 rounded-md transition-all ${selectedOrg === folder ? "bg-blue-500 text-white" : "bg-gray-200 hover:bg-gray-300"}`}
          >
            {folder}
          </button>
        ))}
      </div>
      
      {/* Certificate Display */}
      <div className="flex items-center justify-center flex-grow">
        <div className="w-3/4 h-[100vh] flex flex-col items-center justify-center bg-white p-6 shadow-lg rounded-lg">
          <Slider {...settings} className="w-full">
            {certificateImages.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img src={image} alt={`Certificate ${index + 1}`} className="w-3/4 h-auto rounded-lg shadow-md" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
