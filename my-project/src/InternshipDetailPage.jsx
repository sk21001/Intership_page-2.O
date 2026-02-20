import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const internshipData = {
  frontend: {
    title: "Frontend Developer Internship",
    description: "Work on real projects and build a portfolio you can actually show.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    duration: "3 Months",
    mode: "Hybrid / Remote",
    tools: "HTML, CSS, JS, React, Git",
    startDate: "May 1, 2024",
    rating: "4.8",
    reviews: "275",
    learn: [
      { title: "Frontend fundamentals", desc: "HTML, CSS, JavaScript and React with hands-on tasks." },
      { title: "Project experience", desc: "Build landing pages and dashboards used in real scenarios." },
      { title: "Certificate", desc: "AICTE-recognized certificate for your resume." },
    ],
    curriculum: [
      "HTML & CSS basics",
      "JavaScript essentials",
      "React & APIs",
      "Mentor guidance",
      "Resume support",
      "Placement help",
    ],
  },
  dataAnalyst: {
    title: "Data Analyst Internship",
    description: "Master data analysis and create insights from real datasets.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    duration: "3 Months",
    mode: "Hybrid / Remote",
    tools: "Python, SQL, Tableau, Excel, Pandas",
    startDate: "May 1, 2024",
    rating: "4.9",
    reviews: "320",
    learn: [
      { title: "Data fundamentals", desc: "SQL, Python, and data visualization with hands-on projects." },
      { title: "Analytics experience", desc: "Work on real datasets and create actionable reports." },
      { title: "Certificate", desc: "Industry-recognized certificate for your resume." },
    ],
    curriculum: [
      "SQL & Database basics",
      "Python for data analysis",
      "Data visualization",
      "Industry mentor guidance",
      "Portfolio projects",
      "Job placement support",
    ],
  },
  backendDeveloper: {
    title: "Backend Developer Internship",
    description: "Build scalable systems and master server-side development.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
    duration: "3 Months",
    mode: "Hybrid / Remote",
    tools: "Node.js, Express, MongoDB, SQL, APIs",
    startDate: "May 1, 2024",
    rating: "4.7",
    reviews: "280",
    learn: [
      { title: "Backend fundamentals", desc: "Node.js, Express, databases, and API design." },
      { title: "System design", desc: "Build robust applications handling real-world scenarios." },
      { title: "Certificate", desc: "AICTE-recognized certificate for your resume." },
    ],
    curriculum: [
      "Node.js & Express basics",
      "Database design (SQL & MongoDB)",
      "RESTful API development",
      "Authentication & security",
      "Code review practices",
      "DevOps fundamentals",
    ],
  },
  uiuxDesign: {
    title: "UI/UX Design Internship",
    description: "Create beautiful and user-friendly digital experiences.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&q=80",
    duration: "3 Months",
    mode: "Hybrid / Remote",
    tools: "Figma, Adobe XD, Sketch, Prototyping",
    startDate: "May 1, 2024",
    rating: "4.8",
    reviews: "210",
    learn: [
      { title: "Design fundamentals", desc: "UX principles, color theory, and typography." },
      { title: "Real projects", desc: "Design interfaces for actual client projects." },
      { title: "Certificate", desc: "AICTE-recognized certificate for your resume." },
    ],
    curriculum: [
      "Design principles & UX basics",
      "Figma mastery",
      "Prototyping & testing",
      "User research methods",
      "Design systems",
      "Portfolio development",
    ],
  },
};

export default function InternshipDetailPage() {
  const { type } = useParams();
  const navigate = useNavigate();
  const data = internshipData[type];
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    college: "",
    branch: "",
    location: "",
    skills: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [type]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Internship not found</h1>
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleApply = () => {
    setShowModal(true);
    setSubmitted(false);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.college
    ) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          college: formData.college,
          education: formData.branch,
          skills: formData.skills,
          location: formData.location,
          about: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setShowModal(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            college: "",
            branch: "",
            location: "",
            skills: "",
            message: "",
          });
        }, 2000);
      } else {
        alert("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Error submitting application. Please check your connection.");
    }
  };

  const handleBack = () => {
    navigate("/", { state: { scrollToInternships: true } });
  };

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Back Button */}
      <button
        onClick={handleBack}
        className="fixed top-3 sm:top-4 left-3 sm:left-4 bg-indigo-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-indigo-700 z-10 text-sm sm:text-base"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="pt-8 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              {data.title}
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-indigo-100 mb-6 sm:mb-8">
              {data.description}
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={handleApply}
                className="bg-orange-500 hover:bg-orange-600 px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold shadow-lg text-sm sm:text-base"
              >
                Apply Now
              </button>

              <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">
                📅 {data.duration}
              </span>
              <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">
                📍 {data.mode}
              </span>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src={data.image}
              alt={data.title}
              className="rounded-2xl shadow-2xl w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        <Card emoji="💼" text="500+ openings" />
        <Card emoji="🚀" text="Live projects" />
        <Card emoji="🏆" text="Mentor support" />
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
        <div className="lg:col-span-2 bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-sm border">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            What you'll learn
          </h2>

          {data.learn.map((item, idx) => (
            <Item key={idx} title={item.title} desc={item.desc} />
          ))}
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg border">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Quick info</h3>

          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <b>Duration:</b> {data.duration}
            </li>
            <li>
              <b>Mode:</b> {data.mode}
            </li>
            <li>
              <b>Tools:</b> {data.tools}
            </li>
            <li>
              <b>Start:</b> {data.startDate}
            </li>
          </ul>

          <button
            onClick={handleApply}
            className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base"
          >
            Join Internship →
          </button>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
            ⭐ {data.rating} rating ({data.reviews} reviews)
          </p>
        </div>
      </section>

      {/* Curriculum Section - Timeline Based */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            3-Month Learning Journey
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Progressive curriculum with structured phases to build expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 via-pink-500 to-orange-400"></div>

          <div className="space-y-8 lg:space-y-12">
            {/* Phase 1 */}
            <div className="lg:pl-12 relative">
              <div className="absolute -left-4 lg:-left-6 top-0 w-8 h-8 bg-orange-500 border-4 border-white rounded-full shadow-lg"></div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 p-6 sm:p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                    Month 1
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-orange-900">Foundation</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.curriculum.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                      <span className="text-orange-500 text-lg">📚</span>
                      <span className="text-sm sm:text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="lg:pl-12 relative">
              <div className="absolute -left-4 lg:-left-6 top-0 w-8 h-8 bg-pink-500 border-4 border-white rounded-full shadow-lg"></div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 border border-pink-200 p-6 sm:p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                    Month 2
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-pink-900">Intermediate</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.curriculum.slice(2, 4).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                      <span className="text-pink-500 text-lg">🚀</span>
                      <span className="text-sm sm:text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="lg:pl-12 relative">
              <div className="absolute -left-4 lg:-left-6 top-0 w-8 h-8 bg-indigo-500 border-4 border-white rounded-full shadow-lg"></div>
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 border border-indigo-200 p-6 sm:p-8 rounded-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                    Month 3
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-indigo-900">Advanced</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {data.curriculum.slice(4).map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg">
                      <span className="text-indigo-500 text-lg">⭐</span>
                      <span className="text-sm sm:text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            {!submitted ? (
              <div className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                  Apply for {data.title}
                </h2>
                <p className="text-gray-600 mb-6">
                  Fill the form below to apply for this internship
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="+91 XXXXXXXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      College *
                    </label>
                    <input
                      type="text"
                      name="college"
                      value={formData.college}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your college name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Branch
                    </label>
                    <input
                      type="text"
                      name="branch"
                      value={formData.branch}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your branch"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your city/location"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Skills
                    </label>
                    <input
                      type="text"
                      name="skills"
                      value={formData.skills}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="e.g., React, JavaScript, CSS"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Additional Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                      placeholder="Tell us why you're interested..."
                      rows="3"
                    />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => setShowModal(false)}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg transition"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="p-8 text-center flex flex-col items-center justify-center min-h-80">
                <div className="mb-6 animate-bounce">
                  <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      className="w-16 h-16 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-green-600">
                  Application Submitted!
                </h3>
                <p className="text-gray-600 mb-6 text-sm sm:text-base">
                  Thank you for applying to {data.title}. We'll review your
                  application and get back to you soon!
                </p>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* CTA Section - Ready to Start Your Journey */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-base sm:text-lg mb-8 sm:mb-10">
            Join thousands of students who have transformed their careers
          </p>
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            className="bg-white text-purple-600 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-lg sm:text-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  );
}

/* Small Components */
function Card({ emoji, text }) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md flex items-center gap-3">
      <span className="text-2xl sm:text-3xl">{emoji}</span>
      <p className="font-medium text-sm sm:text-base">{text}</p>
    </div>
  );
}

function Item({ title, desc }) {
  return (
    <div className="mb-4 sm:mb-5">
      <h4 className="font-semibold text-sm sm:text-base">{title}</h4>
      <p className="text-xs sm:text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function List({ text }) {
  return (
    <div className="flex gap-2 items-start mb-4 sm:mb-0">
      <span className="text-lg sm:text-xl flex-shrink-0">✔</span>
      <span className="text-sm sm:text-base">{text}</span>
    </div>
  );
}
