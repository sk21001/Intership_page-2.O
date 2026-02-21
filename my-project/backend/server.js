import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

/* ================= MONGODB ================= */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log(err));

/* ================= SCHEMA ================= */

const ApplicationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  college: String,
  education: String,
  skills: String,
  location: String,
  about: String,
  createdAt: { type: Date, default: Date.now }
});

const InternshipSchema = new mongoose.Schema({
  type: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  description: String,
  image: String,
  duration: String,
  mode: String,
  tools: String,
  startDate: String,
  rating: String,
  reviews: String,
  learn: [{
    title: String,
    desc: String
  }],
  curriculum: [String],
  createdAt: { type: Date, default: Date.now }
});

const HabitSchema = new mongoose.Schema({
  criteria: { type: String, required: true },
  xyzon: { type: String, required: true },
  other: { type: String, required: true },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

const Application = mongoose.model("Application", ApplicationSchema);
const Internship = mongoose.model("Internship", InternshipSchema);
const HabitData = mongoose.model("HabitData", HabitSchema);

/* ================= EMAIL SETUP ================= */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

/* ================= SEED DATA ================= */

const seedInternships = async () => {
  const internshipsData = [
    {
      type: "frontend",
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
    {
      type: "dataAnalyst",
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
    {
      type: "backendDeveloper",
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
    {
      type: "uiuxDesign",
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
  ];

  try {
    const count = await Internship.countDocuments();
    if (count === 0) {
      await Internship.insertMany(internshipsData);
      console.log("✅ Internships seeded successfully");
    }
  } catch (error) {
    console.error("❌ Error seeding internships:", error);
  }
};

// Seed database on startup
seedInternships();

/* ================= SEED HABIT DATA ================= */

const seedHabitData = async () => {
  const habitRows = [
    { criteria: "Curriculum Power", xyzon: "100% industry-driven curriculum built for real company requirements", other: "Generic syllabus with little or no market relevance", order: 1 },
    { criteria: "Learning Model", xyzon: "Real internship + hands-on training from Day 1", other: "Theory-based learning & recorded videos", order: 2 },
    { criteria: "Mentor Access", xyzon: "Direct access to industry mentors with continuous guidance", other: "Doubts cleared only during class hours", order: 3 },
    { criteria: "Trainer Quality", xyzon: "Working professionals, startup founders & tech leads", other: "Trainers with limited or no real-world exposure", order: 4 },
    { criteria: "Project Experience", xyzon: "Live projects, client-based tasks & real deliverables", other: "Dummy, recycled, or copy-paste projects", order: 5 },
    { criteria: "Technology Exposure", xyzon: "Latest tools & in-demand technologies used by real companies", other: "Outdated tools & limited tech stack", order: 6 },
    { criteria: "Internship Value", xyzon: "Real internship experience with performance tracking", other: "Internship only for certificate", order: 7 },
    { criteria: "Career Acceleration", xyzon: "Resume, GitHub, LinkedIn & interview-readiness support", other: "Very limited career preparation", order: 8 },
    { criteria: "Opportunities", xyzon: "Startup exposure, freelancing readiness & placement assistance", other: "Very limited job exposure", order: 9 },
    { criteria: "Eligibility Freedom", xyzon: "Open to students, freshers & career switchers", other: "Restricted by degree or background", order: 10 },
    { criteria: "Recognition & Credibility", xyzon: "Industry-recognized experience that adds real value", other: "No strong recognition or credibility", order: 11 },
    { criteria: "Institute Recognized by", xyzon: "Approved & certified by recognized authorities", other: "No official recognition", order: 12 },
  ];

  try {
    const count = await HabitData.countDocuments();
    if (count === 0) {
      await HabitData.insertMany(habitRows);
      console.log("✅ Habit data seeded successfully");
    }
  } catch (error) {
    console.error("❌ Error seeding habit data:", error);
  }
};

seedHabitData();

/* ================= API ================= */

// GET all habit/comparison data
app.get("/habits", async (req, res) => {
  try {
    const habits = await HabitData.find().sort({ order: 1 });
    res.json(habits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET all internships
app.get("/internships", async (req, res) => {
  try {
    const internships = await Internship.find();
    res.json(internships);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

// GET internship by type
app.get("/internships/:type", async (req, res) => {
  try {
    const internship = await Internship.findOne({ type: req.params.type });
    if (!internship) {
      return res.status(404).json({ error: "Internship not found" });
    }
    res.json(internship);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

app.post("/apply", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      college,
      education,
      skills,
      location,
      about
    } = req.body;

    const newApp = new Application({
      name,
      email,
      phone,
      college,
      education,
      skills,
      location,
      about
    });

    await newApp.save();

    // ❗ Email content unchanged
    await transporter.sendMail({
  from: process.env.EMAIL,
  to: email,
  subject: "Internship Application Received",
  html: `
    <p>Dear ${name},</p>

    <p>
      Thank you for applying for the <strong>Frontend Developer Internship</strong> at 
      <strong>Xyzon Innovations Private Limited</strong>. We have received your application 
      and are currently reviewing your profile.
    </p>

    <p>
      If your qualifications match our requirements, we will contact you with the next steps.
    </p>

    <p>
      Thank you for your interest in joining our team.
    </p>

    <p>
      Best regards,<br/>
      <strong>HR Team</strong><br/>
      <strong>Xyzon Innovations Private Limited</strong>
    </p>
  `,
});


    res.json({ message: "Application submitted & email sent" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
 
});
 app.listen(5000, () =>
  console.log("🚀 Server running on port 5000")
);

