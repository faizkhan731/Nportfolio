import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(
      "https://script.google.com/macros/s/AKfycbzn__Z3rkjsUPlPDll7NadWpS-l_Il9zvSudJnFHU4iPQZBDUxJEcOhJ7jKEfjXxf_pXQ/exec",
      {
        method: "POST",
        mode: "no-cors",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Get In Touch
        </h2>

        <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
          Please contact me directly at{" "}
          <span className="font-medium text-black">kfaiz3361@gmail.com</span> or
          fill out the form below.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
            focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
            focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm
            focus:outline-none focus:ring-2 focus:ring-black resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black text-white py-3 text-sm font-medium
          hover:bg-gray-900 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="mt-10 py-6">
        <p className="text-center text-sm text-gray-500">
          © 2026 <span className="font-medium text-gray-700">Md Faij</span>. All
          rights reserved.
        </p>
      </footer>
    </>
  );
};

export default Contact;
