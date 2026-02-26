import React, { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRocket, FaChartBar, FaCog, FaPaintBrush, FaFacebookF, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import Hero from "./components/Hero";
import Hirings from "./components/Hirings";
import Habit from "./components/Habit";

const internships = [
  {
    id: "frontend",
    title: "Frontend Developer",
    description: "Master React, HTML, CSS, and modern web development",
    icon: <FaRocket className="text-white" />,
    color: "from-blue-500 to-cyan-500",
    badge: "Most Popular",
  },
  {
    id: "dataAnalyst",
    title: "Data Analyst",
    description: "Learn SQL, Python, and data visualization techniques",
    icon: <FaChartBar className="text-white" />,
    color: "from-purple-500 to-pink-500",
    badge: "High Demand",
  },
  {
    id: "backendDeveloper",
    title: "Backend Developer",
    description: "Build scalable systems with Node.js and databases",
    icon: <FaCog className="text-white" />,
    color: "from-green-500 to-emerald-500",
    badge: "Trending",
  },
  {
    id: "uiuxDesign",
    title: "UI/UX Design",
    description: "Create beautiful interfaces with Figma and design principles",
    icon: <FaPaintBrush className="text-white" />,
    color: "from-orange-500 to-red-500",
    badge: "Creative",
  },
];

export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const internshipSectionRef = useRef(null);

  useEffect(() => {
    if (location.state?.scrollToInternships) {
      setTimeout(() => {
        internshipSectionRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location.state]);

  const handleBrowseInternships = () => {
    setTimeout(() => {
      internshipSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleSelectInternship = (internshipId) => {
    navigate(`/internship/${internshipId}`);
  };

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <Hero onBrowseClick={handleBrowseInternships} />

      <Habit />

      <section className="bg-white py-12 sm:py-16 lg:py-20 mt-12 sm:mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-16">Why Choose Our Internships?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Feature
              title="Learn from Experts"
              description="Get mentored by industry professionals with years of experience"
              icon="👨‍💼"
            />
            <Feature
              title="Build Real Projects"
              description="Work on actual projects that impact real users and businesses"
              icon="💻"
            />
            <Feature
              title="Recognized Certificate"
              description="Get AICTE-recognized certificates valued by top companies"
              icon="🏆"
            />
            <Feature
              title="Job Placement"
              description="Direct placement opportunities with our partner companies"
              icon="🎯"
            />
            <Feature
              title="Flexible Schedule"
              description="Choose between hybrid and remote internships that fit your needs"
              icon="📅"
            />
            <Feature
              title="Career Support"
              description="Resume review, interview prep, and 1:1 career guidance included"
              icon="📈"
            />
          </div>
        </div>
      </section>

      <section
        ref={internshipSectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 sm:mb-6">Choose Your Internship</h2>
        <p className="text-center text-gray-600 mb-10 sm:mb-16 text-sm sm:text-base lg:text-lg">
          Select the field that matches your career goals
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {internships.map((internship) => (
            <InternshipCard
              key={internship.id}
              internship={internship}
              onSelect={() => handleSelectInternship(internship.id)}
            />
          ))}
        </div>
      </section>

      <Hirings />

      <footer className="bg-slate-900 text-white py-6 sm:py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3">Xyzon Innovations</h3>
              <p className="text-gray-400 text-xs sm:text-sm mb-4">
                Empowering the next generation of tech professionals through quality internships and real-world experience.
              </p>
              <div className="flex gap-3">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaFacebookF className="w-4 h-4 text-blue-400 hover:text-blue-300" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaTwitter className="w-4 h-4 text-sky-400 hover:text-sky-300" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FaLinkedinIn className="w-4 h-4 text-blue-500 hover:text-blue-400" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Internships</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Resources</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-3">Contact Us</h4>
              <div className="space-y-2 text-xs sm:text-sm text-gray-400">
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="text-orange-500 text-sm mt-0.5" />
                  <p>123 Tech Street<br/>Bangalore, India</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="text-orange-500 text-sm" />
                  <a href="mailto:info@xyzoninnovations.com" className="hover:text-white transition text-xs sm:text-sm break-all">info@xyzoninnovations.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-orange-500 text-sm" />
                  <a href="tel:+919876543210" className="hover:text-white transition">+91 9876543210</a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-4 sm:pt-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
              <p className="text-gray-400 text-xs text-center sm:text-left">
                © 2024 Xyzon Innovations Private Limited. All rights reserved.
              </p>
              <div className="flex gap-4 text-xs text-gray-400">
                <a href="#" className="hover:text-white transition">Privacy</a>
                <a href="#" className="hover:text-white transition">Terms</a>
                <a href="#" className="hover:text-white transition">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function InternshipCard({ internship, onSelect }) {
  return (
    <div
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer group h-full"
      onClick={onSelect}
    >
      <div className={`bg-gradient-to-r ${internship.color} h-20 sm:h-24 flex items-center justify-center`}>
        <span className="text-4xl sm:text-5xl lg:text-6xl">{internship.icon}</span>
      </div>

      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex justify-between items-start mb-3 gap-2">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">{internship.title}</h3>
          <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
            {internship.badge}
          </span>
        </div>

        <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{internship.description}</p>

        <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base cursor-pointer hover:from-purple-600 hover:to-indigo-600 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
          Explore Now →
        </button>
      </div>
    </div>
  );
}

function Feature({ title, description, icon }) {
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>
  );
}
