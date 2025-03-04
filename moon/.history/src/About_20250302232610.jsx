export default function About() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-purple-600 text-white p-4 z-10">
        <ul className="flex justify-between">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* About Section */}
      <section
        id="about"
        className="bg-purple-50 flex items-center justify-center text-center"
        style={{ height: 'calc(100vh - 4rem)' }}
      >
        <div className="text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4">
            I am a Full Stack Developer
          </h1>
          <p className="text-lg md:text-2xl text-purple-600 mb-4 italic">
            "Love what you do, and you'll never work a day in your life."
          </p>
          <div className="flex justify-center mt-8">
            <div className="w-32 h-32 border-4 border-purple-800 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="bg-gray-100 flex items-center justify-center text-center"
        style={{ height: 'calc(100vh - 4rem)' }}
      >
        {/* Content for projects */}
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-blue-50 flex items-center justify-center text-center"
        style={{ height: 'calc(100vh - 4rem)' }}
      >
        {/* Content for contact */}
      </section>
    </>
  );
}
