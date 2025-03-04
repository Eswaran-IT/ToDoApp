import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in ms
      once: true,     // Trigger animation once when scrolled into view
    });
  }, []);

  return (
    <section
      id="about"
      className="h-screen bg-purple-50 flex items-center justify-center text-center m-0 shadow-2xl"
    >
      <div className="text-center p-6 m-0">
        {/* Main Title with animation */}
        <h1
          className="text-4xl md:text-6xl font-bold text-purple-800 mb-4"
          data-aos="fade-up"
        >
          I am a Full Stack Developer
        </h1>

        {/* Quote with animation */}
        <p
          className="text-lg md:text-2xl text-purple-600 mb-4 italic"
          data-aos="fade-up"
        >
          "Love what you do, and you'll never work a day in your life."
        </p>

        {/* Optional Visual Content with animation */}
        <div className="flex justify-center mt-8" data-aos="fade-up">
          <div className="w-32 h-32 border-4 border-purple-800 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
