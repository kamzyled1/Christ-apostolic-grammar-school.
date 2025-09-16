import express from 'express';
import { authenticateJWT, authorizeRoles } from '../middlewares/auth';

const router = express.Router();

// See information, communicate with principal/teachers
router.get('/info', authenticateJWT, authorizeRoles(['Gateman']), async (req, res) => {
  // Fetch info for gateman
  res.json([]);
});
router.post('/message', authenticateJWT, authorizeRoles(['Gateman']), async (req, res) => {
  // Communicate with principal/teachers
  res.json({ message: 'Message sent' });
});

export default router;
