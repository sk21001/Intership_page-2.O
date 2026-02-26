import { Router } from "express";
import HabitData from "../models/HabitData.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const habits = await HabitData.find().sort({ order: 1 });
    res.json(habits);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
