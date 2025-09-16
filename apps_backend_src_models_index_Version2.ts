import { sequelize } from '../config/db';
import User from './User';
import Student from './Student';
import Announcement from './Announcement';
import Assignment from './Assignment';
import Suspension from './Suspension';
import Payment from './Payment';

User.hasMany(Announcement, { foreignKey: 'userId' });
User.hasMany(Assignment, { foreignKey: 'teacherId' });
Student.hasMany(Assignment, { foreignKey: 'classId' });
Student.hasMany(Suspension, { foreignKey: 'studentId' });
Student.hasMany(Payment, { foreignKey: 'studentId' });

export { sequelize, User, Student, Announcement, Assignment, Suspension, Payment };