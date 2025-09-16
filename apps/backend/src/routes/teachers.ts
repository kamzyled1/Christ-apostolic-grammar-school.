import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const teachers = await prisma.teacher.findMany();
  res.json(teachers);
});

router.post("/", async (req, res) => {
  const { name, subject } = req.body;
  const teacher = await prisma.teacher.create({
    data: { name, subject }
  });
  res.json(teacher);
});

export default router;
