import express from 'express';
import { authenticateJWT, authorizeRoles } from '../middlewares/auth';
import Payment from '../models/Payment';
import { summarizeReport } from '../utils/ai';

const router = express.Router();

// Manage school fees
router.get('/payments', authenticateJWT, authorizeRoles(['Bursar']), async (req, res) => {
  const payments = await Payment.findAll();
  res.json(payments);
});

// View debtors
router.get('/debtors', authenticateJWT, authorizeRoles(['Bursar']), async (req, res) => {
  const debtors = await Payment.findAll({ where: { status: 'pending' } });
  res.json(debtors);
});

// Send fee reminders
router.post('/reminder', authenticateJWT, authorizeRoles(['Bursar']), async (req, res) => {
  // Implement: send reminders to students/parents
  res.json({ message: 'Reminders sent' });
});

// AI assistance for financial reports
router.post('/ai-report', authenticateJWT, authorizeRoles(['Bursar']), async (req, res) => {
  const { text } = req.body;
  const summary = await summarizeReport(text);
  res.json({ summary });
});

export default router;
