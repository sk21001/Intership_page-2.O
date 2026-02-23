import { Router } from "express";
import Application from "../models/Application.js";
import getResend from "../utils/email.js";

const router = Router();

// POST apply for internship
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, college, education, skills, location, about } =
      req.body;

    const newApp = new Application({
      name,
      email,
      phone,
      college,
      education,
      skills,
      location,
      about,
    });

    await newApp.save();

    // Send confirmation email (non-blocking — don't fail the request if email fails)
    try {
      await getResend().emails.send({
        from: "Xyzon Innovations <onboarding@resend.dev>",
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
    } catch (emailErr) {
      console.error("Email sending failed (application still saved):", emailErr.message);
    }

    res.json({ message: "Application submitted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
