import React, { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

export default function ApplyModal({ close }) {
  const [form, setForm] = useState({
  name: "",
  email: "",
  phone: "",
  college: "",
  education: "",
  skills: "",
  location: "",
  about: "",
});


  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`${API_URL}/apply`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Application submitted!");
    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 sm:p-8 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Internship Application</h2>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <input name="name" placeholder="Full Name" required onChange={handleChange}
            className="w-full border p-2 sm:p-3 rounded text-sm sm:text-base" />

          <input name="email" placeholder="Email" required onChange={handleChange}
            className="w-full border p-2 sm:p-3 rounded text-sm sm:text-base" />

          <input name="phone" placeholder="Phone" required onChange={handleChange}
            className="w-full border p-2 sm:p-3 rounded text-sm sm:text-base" />

          <input name="college" placeholder="College" required onChange={handleChange}
            className="w-full border p-2 sm:p-3 rounded text-sm sm:text-base" />
            
          <input name="education" placeholder="Education (e.g., B.E CSE)" required
            onChange={handleChange} className="w-full border p-2 sm:p-3 rounded text-sm sm:text-base" />

          <input name="skills" placeholder="Skills (React, JS, CSS...)" required
            onChange={handleChange} className="w-full border p-2 sm:p-3 rounded text-sm sm:text-base" />

          <input name="location" placeholder="Location" required
            onChange={handleChange} className="w-full border p-2 sm:p-3 rounded text-sm sm:text-base" />

          <textarea name="about" placeholder="Tell us about yourself" required
            onChange={handleChange} className="w-full border p-2 sm:p-3 rounded text-sm sm:text-base min-h-24" />

          <button className="w-full bg-indigo-600 text-white py-2 sm:py-3 rounded text-sm sm:text-base font-semibold hover:bg-indigo-700 transition">
            Submit Application
          </button>
        </form>

        <button onClick={close} className="mt-4 text-xs sm:text-sm text-gray-500 hover:text-gray-700">
          Cancel
        </button>
      </div>
    </div>
  );
}
