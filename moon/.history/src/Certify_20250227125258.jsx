import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// Dynamically import all images from the certificates folder
const certificates = import.meta.glob("/src/assets/certificates/*/*.jpeg");

// Process images into categories
const categories = {};
for (const path in certificates) {
  const parts = path.split("/");
  const category = parts[parts.length - 2]; // Folder name
  if (!categories[category]) categories[category] = [];
  categories[category].push(path);
}

export default function Certify() {
  const categoryNames = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryNames[0]);

  return (
    <section className="p-6 text-center bg-gray-50">
      {/* Category Selection */}
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {categoryNames.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md transition duration-300 ${
              selectedCategory === category
                ? "bg-purple-800 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-purple-300"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Swiper Slider */}
      <Swiper
        navigation
        modules={[Navigation]}
        className="w-full max-w-4xl mx-auto"
      >
        {categories[selectedCategory].map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Certificate ${index + 1}`}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
