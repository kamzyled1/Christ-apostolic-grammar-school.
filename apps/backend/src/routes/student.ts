import express from 'express';
import { authenticateJWT, authorizeRoles } from '../middlewares/auth';
import Assignment from '../models/Assignment';
import Suspension from '../models/Suspension';

const router = express.Router();

// Get assignments
router.get('/assignments', authenticateJWT, authorizeRoles(['Student']), async (req, res) => {
  // Fetch assignments by classId (implement as needed)
  res.json([]);
});

// Submit assignment
router.post('/assignments/submit', authenticateJWT, authorizeRoles(['Student']), async (req, res) => {
  // Implement submission (not shown for brevity)
  res.json({ message: 'Assignment submitted' });
});

// Communicate with class teacher
router.post('/message', authenticateJWT, authorizeRoles(['Student']), async (req, res) => {
  // Store message in DB or notify teacher
  res.json({ message: 'Message sent' });
});

// View suspension/performance records
router.get('/suspensions', authenticateJWT, authorizeRoles(['Student']), async (req, res) => {
  const suspensions = await Suspension.findAll({ where: { studentId: (req as any).user.id } });
  res.json(suspensions);
});

export default router;
