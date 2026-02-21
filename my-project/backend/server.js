import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import habitRoutes from "./routes/habits.js";
import internshipRoutes from "./routes/internships.js";
import applyRoutes from "./routes/apply.js";

dotenv.config();

const app = express();

// CORS configuration for production
const allowedOrigins = [
  "http://localhost:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());

/* ================= MONGODB ================= */

connectDB();

/* ================= ROUTES ================= */

app.use("/habits", habitRoutes);
app.use("/internships", internshipRoutes);
app.use("/apply", applyRoutes);

/* ================= START ================= */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);

