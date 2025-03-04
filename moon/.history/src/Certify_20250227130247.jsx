// CertificateSlider.jsx
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certificates = {
  AICTE: ["certificate1.pdf", "certificate2.pdf"],
  AWS: ["certificate3.pdf"],
  Cisco: ["certificate4.pdf"],
  // add other categories and their certificates here
};

const CertificateSlider = () => {
  const [selectedCategory, setSelectedCategory] = useState("AICTE");

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
    <div style={{ height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
        {Object.keys(certificates).map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <Slider {...settings}>
        {certificates[selectedCategory].map((cert, index) => (
          <div key={index}>
            <iframe
              src={`path/to/certificates/${selectedCategory}/${cert}`}
              style={{ width: "100%", height: "100vh" }}
              title={cert}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Certify;
