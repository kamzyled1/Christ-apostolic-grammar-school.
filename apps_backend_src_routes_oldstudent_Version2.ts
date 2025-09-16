import express from 'express';
import { authenticateJWT, authorizeRoles } from '../middlewares/auth';

const router = express.Router();

// Connect with school activities/events/support
router.get('/activities', authenticateJWT, authorizeRoles(['OldStudent']), async (req, res) => {
  // Fetch school events/activities
  res.json([]);
});

export default router;