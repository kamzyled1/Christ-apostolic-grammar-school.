import express from 'express';
import { authenticateJWT, authorizeRoles } from '../middlewares/auth';

const router = express.Router();

// Communicate with parents, principal, old students
router.post('/message', authenticateJWT, authorizeRoles(['PTA']), async (req, res) => {
  // Implement PTA message
  res.json({ message: 'Message sent' });
});

export default router;
