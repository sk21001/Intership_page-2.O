import React from "react";

const internshipData = {
  frontend: {
    title: "Frontend Developer Internship",
    description: "Work on real projects and build a portfolio you can actually show.",
    image: "https://images.unsplash.com/photo-1581090700227-1e8b8b94e2a9",
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
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
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

export default function InternshipDetail({ internship, onApply, onBack }) {
  const data = internshipData[internship];

  if (!data) return <div>Internship not found</div>;

  return (
    <div className="bg-slate-50 text-slate-800">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="fixed top-3 sm:top-4 left-3 sm:left-4 bg-indigo-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-indigo-700 z-10 text-sm sm:text-base"
      >
        ← Back
      </button>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-900 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          <div className="pt-8 sm:pt-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{data.title}</h1>
            <p className="text-base sm:text-lg lg:text-xl text-indigo-100 mb-6 sm:mb-8">{data.description}</p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              <button
                onClick={onApply}
                className="bg-orange-500 hover:bg-orange-600 px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-semibold shadow-lg text-sm sm:text-base"
              >
                Apply Now
              </button>

              <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">📅 {data.duration}</span>
              <span className="bg-white/20 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base">📍 {data.mode}</span>
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">What you'll learn</h2>

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
            onClick={onApply}
            className="mt-4 sm:mt-6 w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base"
          >
            Join Internship →
          </button>

          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-600">
            ⭐ {data.rating} rating ({data.reviews} reviews)
          </p>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10">Curriculum</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          <div className="space-y-4 sm:space-y-6">
            {data.curriculum.slice(0, 3).map((item, idx) => (
              <List key={idx} text={item} />
            ))}
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow border">
            {data.curriculum.slice(3).map((item, idx) => (
              <List key={idx} text={item} />
            ))}
          </div>
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
