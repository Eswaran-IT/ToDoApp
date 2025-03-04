import { useState } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const icon_name = 'Eswaran Suyamprakasam';
  const nav_items = ['About', 'Services', 'Skills', 'Projects', 'Contact'];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-10 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Animated Logo */}
        <motion.a
          href="#about" // Scrolls to About section
          className="text-purple-800 text-2xl font-bold hover:text-purple-900 transition duration-300"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {icon_name}
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-6">
          {nav_items.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <a
                href={`#${item.toLowerCase()}`} // Smooth scroll to each section
                className="text-purple-800 hover:text-white hover:bg-purple-800 px-3 py-1 rounded-md transition duration-300"
              >
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button (SVG Icons) */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-purple-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6 text-purple-800 hover:text-purple-900 transition duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-purple-800 hover:text-purple-900 transition duration-300"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden mt-2 bg-white shadow-lg rounded-md"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ul className="flex flex-col space-y-2 p-4">
            {nav_items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <a
                  href={`#${item.toLowerCase()}`} // Scroll to section
                  className="text-purple-800 hover:text-white hover:bg-purple-800 px-3 py-2 rounded-md transition duration-300 block"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
