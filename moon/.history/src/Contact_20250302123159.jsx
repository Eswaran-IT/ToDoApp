import React, { useState } from "react";

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
      setResult("✅ Message Sent Successfully!");
      event.target.reset();
    } else {
      setResult("❌ Error: " + data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">Contact Me</h2>

        {/* Display result message */}
        <span className="text-center">{result}</span>

        <form onSubmit={onSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-2 border rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-2 border rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-2 border rounded-md"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-md font-bold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
