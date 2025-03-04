import React, { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const ContactForm = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    // Create FormData object
    const formData = new FormData(event.target);

    // Add your Web3Forms Access Key
    formData.append("access_key", "d9efc43c-09b7-4b2a-a9d7-398286d92712"); // Replace with your Web3Forms Access Key

    // Send form data to Web3Forms API
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      alert("✅ Message Sent Successfully!"); // Show success popup
      event.target.reset(); // Reset form fields
    } else {
      alert(`❌ Error: ${data.message}`); // Show error popup
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Contact Me
        </h2>

        <motion.form
          onSubmit={onSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Continuous animation on the inputs */}
          <motion.div
            className="flex flex-col"
            animate={{
              x: [0, -10, 10, 0],  // Animation loops back and forth
              opacity: [1, 0.8, 1], // Fades in and out
              scale: [1, 1.05, 1],  // Slight scaling for effect
            }}
            transition={{
              duration: 2,           // Duration of each loop
              ease: "easeInOut",     // Easing function for smoothness
              repeat: Infinity,      // Infinite loop
              repeatType: "loop",    // Continuous repeat
            }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            animate={{
              x: [0, -10, 10, 0],
              opacity: [1, 0.8, 1],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </motion.div>

          <motion.div
            className="flex flex-col"
            animate={{
              x: [0, -10, 10, 0],
              opacity: [1, 0.8, 1],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </motion.div>

          <motion.button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            animate={{
              scale: [1, 1.05, 1],   // Button also has a scaling effect
              opacity: [1, 0.8, 1],   // Fading effect for button
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <div className="text-center text-gray-600 mt-4">
          <p className="text-sm">
            <a href="mailto:eswar2003.it@gmail.com" className="text-indigo-600 hover:underline">
              Or email me directly.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
