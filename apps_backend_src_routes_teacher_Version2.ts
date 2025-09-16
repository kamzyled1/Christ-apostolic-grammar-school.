import express from 'express';
import { authenticateJWT, authorizeRoles } from '../middlewares/auth';
import Assignment from '../models/Assignment';
import Announcement from '../models/Announcement';

const router = express.Router();

// Share assignment
router.post('/assignment', authenticateJWT, authorizeRoles(['Teacher']), async (req, res) => {
  const { classId, title, description, dueDate } = req.body;
  await Assignment.create({
    teacherId: (req as any).user.id,
    classId,
    title,
    description,
    dueDate
  });
  res.json({ message: 'Assignment shared' });
});

// Give reports (to student, or principal)
router.post('/report', authenticateJWT, authorizeRoles(['Teacher']), async (req, res) => {
  // Implement as needed: e.g., store in a "Reports" table (not shown for brevity)
  res.json({ message: 'Report submitted' });
});

// Message Principal or Students
router.post('/message', authenticateJWT, authorizeRoles(['Teacher']), async (req, res) => {
  // Implement messaging logic or use announcement/news system
  res.json({ message: 'Message sent' });
});

// Class-specific updates (announcements)
router.post('/announcement', authenticateJWT, authorizeRoles(['Teacher']), async (req, res) => {
  const { classId, title, content } = req.body;
  await Announcement.create({
    userId: (req as any).user.id,
    title,
    content,
    roles: 'Student', // Can add filter by class in query
  });
  res.json({ message: 'Announcement sent' });
});

export default router;