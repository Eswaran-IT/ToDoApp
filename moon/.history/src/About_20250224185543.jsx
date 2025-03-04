import Navbar from './NavBar'; // Import Navbar Component

export default function About() {
  return (
    <div>
      {/* Navbar Component */}
     

      {/* About Section */}
      <section id="about" className="h-screen bg-purple-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">About Me</h1>
          <p className="text-lg text-purple-600">Welcome to my personal page! I am a developer passionate about coding and technology.</p>
        </div>
      </section>
    </div>
  );
}
