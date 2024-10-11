import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.route.js";
import bookRoutes from "./routes/book.router.js";
import cartRoutes from "./routes/cart.route.js";
import paymentRoutes from "./routes/payment.route.js";
import analyticsRoutes from "./routes/analytics.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

// app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("uploads", express.static(path.join(__dirname, "uploads")));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/analytics", analyticsRoutes);

  app.get("/", (req, res) => {
    res.status(200).json({ message: "Server is running on", PORT });
  });

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port: ", PORT);
});
