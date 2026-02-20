import { useEffect, useRef, useState } from "react";
import { FaBriefcase, FaBuilding, FaUserGraduate } from "react-icons/fa";
import ThreeBG from "./ThreeBG";
import DemoVideo from "../src/assets/videos/demo.mp4";
const Hero = ({ onBrowseClick }) => {
  const videoRef = useRef(null);
  const [showVideo, setShowVideo] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [textDone, setTextDone] = useState(false);

  const fullHeading = "Where Learning Meets Real Industry Work";

  const [stats, setStats] = useState({
    openings: 0,
    companies: 0,
    students: 0,
  });

  const targetStats = {
    openings: 10000,
    companies: 500,
    students: 50000,
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        openings:
          prev.openings < targetStats.openings
            ? prev.openings + 200
            : targetStats.openings,
        companies:
          prev.companies < targetStats.companies
            ? prev.companies + 10
            : targetStats.companies,
        students:
          prev.students < targetStats.students
            ? prev.students + 500
            : targetStats.students,
      }));
    }, 30);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (textDone) return;
    let i = 0;
    let timeout;
    function type() {
      setTypedText(fullHeading.slice(0, i + 1));
      i++;
      if (i <= fullHeading.length) {
        timeout = setTimeout(type, 50);
      } else {
        setTypedText(fullHeading);
        setTextDone(true);
      }
    }
    type();
    return () => clearTimeout(timeout);
  }, [textDone]);

  const handleHowItWorks = () => {
    setShowVideo((prev) => !prev);
  };

  useEffect(() => {
    if (showVideo) {
      setTimeout(() => {
        videoRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 150);
    }
  }, [showVideo]);

  return (
    <div className="hero-bg text-white px-6 py-20 relative overflow-hidden">
      <ThreeBG className="absolute inset-0 z-0" />
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center relative z-10">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight min-h-[120px]">
            {typedText}
            <span className="animate-blink">|</span>
          </h1>

          <p className="mt-4 text-lg">
            Industry-driven internships that turn learners into job-ready
            professionals
          </p>

          <p className="mt-2 text-gray-200">
            Hands-on internships, live projects & mentorship from professionals.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button onClick={onBrowseClick} className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg w-full sm:w-auto cursor-pointer transition">
              Browse Internships →
            </button>

            <button
              onClick={handleHowItWorks}
              className="border px-6 py-3 rounded-lg w-full sm:w-auto cursor-pointer transition"
            >
              ▶ How it works
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 text-center bg-blue-900/40 backdrop-blur rounded-xl p-6">
            <div className="flex flex-col items-center">
              <FaBriefcase className="text-3xl mb-2 text-orange-400" />
              <h2 className="text-2xl font-bold">
                {stats.openings.toLocaleString()}+
              </h2>
              <p>Openings Daily</p>
            </div>

            <div className="flex flex-col items-center">
              <FaBuilding className="text-3xl mb-2 text-orange-400" />
              <h2 className="text-2xl font-bold">{stats.companies}+</h2>
              <p>Companies Hiring</p>
            </div>

            <div className="flex flex-col items-center">
              <FaUserGraduate className="text-3xl mb-2 text-orange-400" />
              <h2 className="text-2xl font-bold">
                {stats.students.toLocaleString()}+
              </h2>
              <p>Students Placed</p>
            </div>
          </div>
        </div>

        {/* Right Side - Logo or Video */}
        <div className="flex justify-center items-center w-full mt-10 lg:mt-0 relative">
          {!showVideo ? (
            <div className="animate-bounce">
              <img
                src="/logo.png"
                alt="XYZON Innovations"
                className="max-w-sm w-full h-auto drop-shadow-2xl opacity-0 animate-fade-in"
              />
            </div>
          ) : (
            <div
              ref={videoRef}
              className="w-full max-w-lg sm:max-w-xl lg:max-w-2xl xl:max-w-3xl aspect-video rounded-xl overflow-hidden shadow-xl border border-white/20 animate-fade-in"
            >
              <iframe
                className="w-full h-full"
                src={DemoVideo}
                title="How it works"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .hero-bg {
          background: linear-gradient(
            135deg,
            #0f1f4a 0%,
            #162e6d 35%,
            #1e40af 65%,
            #2563eb 100%
          );
          background-size: 200% 200%;
          animation: heroMove 18s ease-in-out infinite;
        }

        @keyframes heroMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes blink {
          0%, 49%, 100% { opacity: 1; }
          50%, 99% { opacity: 0; }
        }

        .animate-bounce {
          animation: bounce 1.5s ease-in-out 1;
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-blink {
          animation: blink 1s infinite;
          color: white;
        }

        .hero-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at top right, rgba(255,255,255,0.08), transparent 60%);
          pointer-events: none;
        }
      `}</style>
    </div>
  );
};

export default Hero;
