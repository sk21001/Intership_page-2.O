import { motion } from "framer-motion";
import aicte from "./assets/download.jfif";
import dpptit from "./assets/dppit.jfif";
import iso from "./assets/iso.jfif";
import msme from "./assets/msme.png";

const data = [
  {
    criteria: "Curriculum Power",
    xyzon: "100% industry-driven curriculum built for real company requirements",
    other: "Generic syllabus with little or no market relevance",
  },
  {
    criteria: "Learning Model",
    xyzon: "Real internship + hands-on training from Day 1",
    other: "Theory-based learning & recorded videos",
  },
  {
    criteria: "Mentor Access",
    xyzon: "Direct access to industry mentors with continuous guidance",
    other: "Doubts cleared only during class hours",
  },
  {
    criteria: "Trainer Quality",
    xyzon: "Working professionals, startup founders & tech leads",
    other: "Trainers with limited or no real-world exposure",
  },
  {
    criteria: "Project Experience",
    xyzon: "Live projects, client-based tasks & real deliverables",
    other: "Dummy, recycled, or copy-paste projects",
  },
  {
    criteria: "Technology Exposure",
    xyzon: "Latest tools & in-demand technologies used by real companies",
    other: "Outdated tools & limited tech stack",
  },
  {
    criteria: "Internship Value",
    xyzon: "Real internship experience with performance tracking",
    other: "Internship only for certificate",
  },
  {
    criteria: "Career Acceleration",
    xyzon: "Resume, GitHub, LinkedIn & interview-readiness support",
    other: "Very limited career preparation",
  },
  {
    criteria: "Opportunities",
    xyzon: "Startup exposure, freelancing readiness & placement assistance",
    other: "Very limited job exposure",
  },
  {
    criteria: "Eligibility Freedom",
    xyzon: "Open to students, freshers & career switchers",
    other: "Restricted by degree or background",
  },
  {
    criteria: "Recognition & Credibility",
    xyzon: "Industry-recognized experience that adds real value",
    other: "No strong recognition or credibility",
  },
  {
    criteria: "Institute Recognized by",
    xyzon: "Approved & certified by recognized authorities",
    other: "No official recognition",
    images: [aicte, iso, msme, dpptit],
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a12] px-4 sm:px-8 py-16 overflow-hidden">

      {/* Background Glow Animation */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
        style={{ top: -100, left: -100 }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-20"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        style={{ bottom: -100, right: -100 }}
      />

      {/* Title */}
      {/* ===== ULTRA ANIMATED TITLE ===== */}
<div className="relative mb-20 flex justify-center">

  {/* Background Glow Pulse */}
  <motion.div
    className="absolute w-[600px] h-[250px] bg-purple-600/30 blur-3xl rounded-full"
    animate={{ scale: [1, 1.15, 1] }}
    transition={{ duration: 6, repeat: Infinity }}
  />

  {/* Main Heading */}
  <motion.h1
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative text-center text-5xl sm:text-6xl font-black"
  >
    <motion.span
      className="inline-block bg-gradient-to-r from-purple-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent"
      style={{ backgroundSize: "200% 200%" }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {"Why Xyzon Wins".split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 60, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            delay: index * 0.05,
            duration: 0.7,
            type: "spring",
            stiffness: 120,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>

    {/* Animated Underline */}
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "200px" }}
      transition={{ delay: 1, duration: 0.8 }}
      className="h-1 bg-gradient-to-r from-purple-500 to-cyan-400 mx-auto mt-6 rounded-full"
    />
  </motion.h1>
</div>

      {/* TABLE CONTAINER (Light & Separated) */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-6xl mx-auto rounded-2xl bg-white shadow-2xl overflow-hidden"
      >
        {/* Animated Sweep */}
        <motion.div
          className="absolute top-0 left-[-50%] w-1/2 h-full bg-gradient-to-r from-transparent via-black/5 to-transparent"
          animate={{ left: ["-50%", "150%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* DESKTOP TABLE */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-sm border-collapse text-gray-800">

            <thead>
              <tr className="text-white text-xs uppercase">
                <th className="p-5 text-left bg-[#1e1b4b]">
                  Criteria
                </th>
                <th className="p-5 text-center bg-[#4c1d95]">
                  ⚡ Xyzon
                </th>
                <th className="p-5 text-center bg-[#111827]">
                  Others
                </th>
              </tr>
            </thead>

            <tbody>
              {data.map((row, i) => (
                <motion.tr
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="border-t hover:bg-purple-50 transition"
                >
                  <td className="p-5 font-semibold whitespace-nowrap bg-gray-50">
                    {row.criteria}
                  </td>

                  <td className="p-5 relative bg-purple-50">

                    {/* Glow Pulse */}
                    <motion.div
                      className="absolute inset-0 rounded-lg pointer-events-none"
                      style={{
                        background:
                          "radial-gradient(circle at center, rgba(139,92,246,0.2), transparent 70%)",
                      }}
                      animate={{ opacity: [0.3, 0.6, 0.3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 150 }}
                      className="relative z-10 font-semibold text-purple-700"
                    >
                      {row.xyzon}
                    </motion.div>

                    {row.images && (
                      <div className="flex gap-3 mt-3 flex-wrap">
                        {row.images.map((img, idx) => (
                          <motion.img
                            key={idx}
                            src={img}
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            transition={{ type: "spring" }}
                            className="h-10 bg-white p-1 rounded-md shadow"
                          />
                        ))}
                      </div>
                    )}
                  </td>

                  <td className="p-5 text-gray-500 bg-gray-100">
                    {row.other}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE VERSION */}
        <div className="md:hidden p-5 space-y-6">
          {data.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl p-5 border bg-gray-50"
            >
              <h3 className="font-bold text-purple-700 mb-3 uppercase text-sm">
                {row.criteria}
              </h3>

              <p className="mb-2 font-semibold text-gray-800">
                {row.xyzon}
              </p>

              {row.images && (
                <div className="flex gap-2 mt-2 flex-wrap">
                  {row.images.map((img, idx) => (
                    <motion.img
                      key={idx}
                      src={img}
                      whileHover={{ scale: 1.1 }}
                      className="h-8 bg-white p-1 rounded shadow"
                    />
                  ))}
                </div>
              )}

              <p className="text-gray-500 mt-3">
                {row.other}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}