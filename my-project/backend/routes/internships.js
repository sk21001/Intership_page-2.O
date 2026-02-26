import { Router } from "express";
import Internship from "../models/Internship.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const internships = await Internship.find();
    res.json(internships);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/:type", async (req, res) => {
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

export default router;
