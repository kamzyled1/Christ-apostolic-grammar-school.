import express from 'express';
import { authenticateJWT, authorizeRoles } from '../middlewares/auth';
import User from '../models/User';
import Announcement from '../models/Announcement';
import Suspension from '../models/Suspension';
import { sendMail } from '../utils/mailer';

const router = express.Router();

// Approve accounts (Teacher, Gateman, Bursar, PTA)
router.post('/approve', authenticateJWT, authorizeRoles(['Principal']), async (req, res) => {
  const { userId } = req.body;
  const user = await User.findByPk(userId);
  if (!user) return res.status(404).json({ message: 'User not found' });
  user.approved = true;
  await user.save();
  await sendMail(
    user.email,
    "Account Approved",
    `<p>Your ${user.role} account has been approved by the principal. You may now login.</p>`
  );
  res.json({ message: 'User approved' });
});

// Announcements (to all or selected roles)
router.post('/announcement', authenticateJWT, authorizeRoles(['Principal']), async (req, res) => {
  const { title, content, roles } = req.body; // roles: array
  await Announcement.create({
    userId: (req as any).user.id,
    title,
    content,
    roles: roles.join(',')
  });
  res.json({ message: 'Announcement sent' });
});

// Suspend student
router.post('/suspend', authenticateJWT, authorizeRoles(['Principal']), async (req, res) => {
  const { studentId, reason, startDate, endDate } = req.body;
  await Suspension.create({ studentId, reason, startDate, endDate });
  res.json({ message: 'Student suspended' });
});

// Edit "About School"
let aboutSchool = "Welcome to Christ Apostolic Grammar School!";
router.get('/about', (req, res) => res.json({ aboutSchool }));
router.post('/about', authenticateJWT, authorizeRoles(['Principal']), (req, res) => {
  aboutSchool = req.body.aboutSchool;
  res.json({ message: 'Updated' });
});

export default router;