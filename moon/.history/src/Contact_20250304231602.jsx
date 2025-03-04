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
      alert("✅ Message Sent Successfully!");
      event.target.reset(); // Reset form fields
    } else {
      alert(`❌ Error: ${data.message}`); // Show error popup
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-gray-800">
          Contact Me
        </h2>

        <motion.form
          onSubmit={onSubmit}
          className="space-y-6"
          initial={{ opacity: 0 }} // Start with opacity 0
          animate={{ opacity: 1 }} // Fade in
          transition={{ duration: 1 }} // 1-second fade-in
        >
          <motion.div
            className="flex flex-col"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.2 }}
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
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.4 }}
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
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.6 }}
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Send Message
          </motion.button>
        </motion.form>

        <div className="text-center text-gray-600">
          <p className="text-sm">
            <a
              href="mailto:eswar2003.it@gmail.com"
              className="text-indigo-600 hover:underline"
            >
              Or email me directly.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
