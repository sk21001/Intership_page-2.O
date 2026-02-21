import mongoose from "mongoose";

const HabitSchema = new mongoose.Schema({
  criteria: { type: String, required: true },
  xyzon: { type: String, required: true },
  other: { type: String, required: true },
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("HabitData", HabitSchema);
