import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import authRoutes from "./routes/auth";
import studentRoutes from "./routes/students";
import teacherRoutes from "./routes/teachers";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/teachers", teacherRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});