import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const students = await prisma.student.findMany();
  res.json(students);
});

router.post("/", async (req, res) => {
  const { name, class: studentClass } = req.body;
  const student = await prisma.student.create({
    data: { name, class: studentClass }
  });
  res.json(student);
});

export default router;