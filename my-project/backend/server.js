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


const Application = mongoose.model("Application", ApplicationSchema);

/* ================= EMAIL SETUP ================= */

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

/* ================= API ================= */

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

