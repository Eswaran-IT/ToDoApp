import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";

// Dynamically import all images from the certificates folder
const certificates = import.meta.glob("/src/assets/certificates/*/*.{jpg,jpeg,png}", { eager: true });

const categories = {};
for (const path in certificates) {
  const parts = path.split("/");
  const category = parts[parts.length - 2]; // Extract folder name
  if (!categories[category]) categories[category] = [];
  categories[category].push(certificates[path].default); // Load images
}

export default function Certify() {
  const categoryNames = Object.keys(categories);
  const [selectedCategory, setSelectedCategory] = useState(categoryNames[0]);

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 text-center">
      {/* Category Selection Tabs */}
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

      {/* Swiper Slider with Navigation and Autoplay */}
      <div className="w-full max-w-4xl h-full flex items-center justify-center"> 
        <Swiper
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3 sec
          modules={[Navigation, Autoplay]}
          className="w-full h-full"
        >
          {categories[selectedCategory]?.map((image, index) => (
            <SwiperSlide key={index} className="flex items-center justify-center">
              <img
                src={image}
                alt={`Certificate ${index + 1}`}
                className="w-auto h-full max-h-[90vh] rounded-lg shadow-md object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
