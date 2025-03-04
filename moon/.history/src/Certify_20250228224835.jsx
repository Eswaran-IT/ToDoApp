import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificateFolders = [
  "AICTE", "AWS", "Cisco", "Coursera", "EC-Council", "Geekstar", "GUVI",
  "INFOSYS", "INTERNSHALA", "Internship", "ISTE", "Linkedin", "MICROSOFT",
  "NPTEL", "OTHERS", "SCALER", "TCS", "TRYHACKME", "UDEMY", "ZSCALER"
];

const certificates = certificateFolders.map(folder => ({
  name: folder,
  image: `/src/assets/Certificates/${folder}/certificate.jpg`, // Adjust file format if needed
}));

const Certificates = () => {
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
    <div className="flex items-center justify-center h-screen bg-gray-100">
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
  );
};

export default Certify;
