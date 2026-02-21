import mongoose from "mongoose";

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
  learn: [
    {
      title: String,
      desc: String,
    },
  ],
  curriculum: [String],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Internship", InternshipSchema);
