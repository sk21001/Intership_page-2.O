import { useEffect, useState } from "react";
import ThreeBG from "./ThreeBG";

const Habit = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch habit data from MongoDB API
  useEffect(() => {
    const fetchHabitData = async () => {
      try {
        const response = await fetch("http://localhost:5000/habits");
        if (!response.ok) throw new Error("Failed to fetch");
        const habitData = await response.json();
        setData(habitData);
      } catch (error) {
        console.error("Error fetching habit data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHabitData();
  }, []);

  // Typing animation for the heading
  const fullTitle = "Why Xyzon Innovations Stands Out";
  const [typedTitle, setTypedTitle] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (done) return;
    let i = 0;
    let timeout;
    function type() {
      setTypedTitle(fullTitle.slice(0, i + 1));
      i++;
      if (i <= fullTitle.length) {
        timeout = setTimeout(type, 90);
      } else {
        setTypedTitle(fullTitle);
        setDone(true);
      }
    }
    type();
    return () => clearTimeout(timeout);
  }, [done]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-white relative min-h-screen px-4 sm:px-8 py-16 overflow-hidden">
      <ThreeBG className="absolute inset-0 z-0" style={{ opacity: 0.7 }} />
      {/* Background Glow Animation */}
      {/* Animated gradient background handled by CSS */}
      {/* Title */}
      {/* ===== ULTRA ANIMATED TITLE ===== */}
      <div className="relative mb-20 flex justify-center">
        <h1
          className="text-center text-5xl sm:text-6xl font-bold text-black"
          style={{
            textShadow: "0 2px 8px #818cf8",
            letterSpacing: "0.01em",
          }}
        >
          {typedTitle}
        </h1>
      </div>
      {/* TABLE CONTAINER (Modern Card Design) */}
      <div className="relative max-w-6xl mx-auto">
        <div className="hidden lg:grid grid-cols-1 gap-4">
          {data.map((row, i) => (
            <div
              key={row._id || i}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 bg-white"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 items-stretch">
                {/* Criteria Column */}
                <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-700 p-5 flex items-center justify-center text-white">
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">{i + 1}</div>
                    <h3 className="text-sm font-bold leading-tight">
                      {row.criteria}
                    </h3>
                  </div>
                </div>

                {/* Xyzon Column */}
                <div className="bg-gradient-to-br from-orange-50 via-yellow-50 to-orange-100 p-5 border-l-4 border-orange-400 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-orange-200 rounded-full opacity-30 -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">⚡</span>
                      <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">Xyzon</span>
                    </div>
                    <p className="text-gray-800 font-semibold text-sm leading-snug">
                      {row.xyzon}
                    </p>
                    <div className="mt-2 flex items-center gap-1 text-orange-600 font-bold text-xs">
                      <span>✓</span>
                      <span>Leading</span>
                    </div>
                  </div>
                </div>

                {/* Others Column */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-5 border-l-4 border-gray-400 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gray-300 rounded-full opacity-20 -mr-10 -mt-10"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg">○</span>
                      <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">Others</span>
                    </div>
                    <p className="text-gray-700 font-medium text-sm leading-snug">
                      {row.other}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View - Card Layout */}
        <div className="lg:hidden space-y-3">
          {data.map((row, i) => (
            <div
              key={row._id || i}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-white border border-purple-100"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  <h3 className="text-white font-bold text-sm">
                    {row.criteria}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-3 space-y-2">
                {/* Xyzon Card */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-3 border-2 border-orange-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-orange-200 rounded-full opacity-20 -mr-6 -mt-6"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-lg">⚡</span>
                      <span className="font-bold text-xs text-orange-700">Xyzon</span>
                    </div>
                    <p className="text-gray-800 font-semibold text-xs">
                      ✓ {row.xyzon}
                    </p>
                  </div>
                </div>

                {/* Others Card */}
                <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-3 border-2 border-gray-400 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gray-300 rounded-full opacity-15 -mr-6 -mt-6"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-lg">○</span>
                      <span className="font-bold text-xs text-gray-700">Others</span>
                    </div>
                    <p className="text-gray-700 text-xs">
                      {row.other}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Habit;
