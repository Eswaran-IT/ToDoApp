import NavBar from './NavBar';
import About from './About';
import Services from './Services';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div>
      <NavBar />
      
      {/* Sections */}
      <section id="about" className="min-h-screen bg-gray-100 py-16">
        <About />
      </section>
      <section id="certify" className="min-h-screen bg-white py-16">
        <Services />
      </section>
      <section id="skills" className="min-h-screen bg-gray-200 py-16">
        <Skills />
      </section>
      <section id="projects" className="min-h-screen bg-white py-16">
        <Projects />
      </section>
      <section id="contact" className="min-h-screen bg-gray-100 py-16">
        <Contact />
      </section>
      <section id="footer" className="py-16 bg-gray-800 text-white">
        <Footer />
      </section>
    </div>
  );
}

export default App;
