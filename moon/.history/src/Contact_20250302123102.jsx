import React from "react";

function App() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "d9efc43c-09b7-4b2a-a9d7-398286d92712"); // Your Web3Forms Key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.error("Error:", data);
      setResult("❌ " + data.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-md">
        <h2 className="text-2xl font-bold text-center text-purple-600 mb-4">Contact Me</h2>
        {result && <p className="text-center text-green-600">{result}</p>}

        <form onSubmit={onSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border rounded-md" />
          <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border rounded-md" />
          <textarea name="message" placeholder="Your Message" required className="w-full p-2 border rounded-md"></textarea>
          <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded-md font-bold">Send</button>
        </form>
      </div>
    </div>
  );
}

export default App;
