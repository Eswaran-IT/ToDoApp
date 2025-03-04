export default function About() {
  return (
    <section
      id="about"
      className="h-auto bg-purple-50 flex items-center justify-center text-center pt-0 pb-0"
    >
      <div className="text-center p-6">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-purple-800">
          I am a Full Stack Developer
        </h1>

        {/* Quote */}
        <p className="text-lg md:text-2xl text-purple-600 italic mt-4">
          "Love what you do, and you'll never work a day in your life."
        </p>

        {/* Optional Visual Content */}
        <div className="flex justify-center mt-8">
          <div className="w-32 h-32 border-4 border-purple-800 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
