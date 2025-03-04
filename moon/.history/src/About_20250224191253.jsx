import { useEffect } from "react";

export default function About() {

  useEffect(() => {
    // You can add animations using JS here if you like
    // Example: Fade-in effect on page load
    const aboutText = document.getElementById("about-text");
    aboutText.classList.add("animate-fade-in");
  }, []);

  return (
    <section
      id="about"
      className="h-screen bg-purple-50 flex items-center justify-center text-center"
    >
      <div className="text-center p-6">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4 animate-slide-in">
          I am a Full Stack Developer
        </h1>

        {/* Quote */}
        <p className="text-lg md:text-2xl text-purple-600 mb-4 italic animate-fade-in">
          "Love what you do, and you'll never work a day in your life."
        </p>

        {/* Animated Design or Visual Content */}
        <div className="flex justify-center mt-8">
          <div className="w-32 h-32 border-4 border-purple-800 rounded-full animate-spin-slow"></div>
        </div>
      </div>
    </section>
  );
}
