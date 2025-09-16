import express from 'express';
import { authenticateJWT, authorizeRoles } from '../middlewares/auth';
import { summarizeReport } from '../utils/ai';

const router = express.Router();

// AI for report management, student performance, debtors
router.post('/summarize', authenticateJWT, authorizeRoles(['Principal', 'Bursar']), async (req, res) => {
  const { text } = req.body;
  const summary = await summarizeReport(text);
  res.json({ summary });
});

export default router;