import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "your_service_id",  // Replace with your EmailJS Service ID
      "your_template_id",  // Replace with your EmailJS Template ID
      e.target,
      "your_public_key"    // Replace with your EmailJS Public Key
    ).then(() => {
      setSent(true);
      e.target.reset();
      setTimeout(() => setSent(false), 3000); // Hide message after 3s
    }).catch(error => console.log(error));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">Contact Me</h2>

        {sent && <p className="text-green-600 text-center">✅ Message Sent Successfully!</p>}

        <form onSubmit={sendEmail} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded-md"/>
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded-md"/>
          <textarea name="message" placeholder="Your Message" required className="w-full p-2 border rounded-md"></textarea>
          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md font-bold">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
