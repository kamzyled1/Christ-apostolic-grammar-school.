import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Assignment extends Model {
  declare id: number;
  declare teacherId: number;
  declare classId: number;
  declare title: string;
  declare description: string;
  declare dueDate: Date;
}

Assignment.init({
  teacherId: DataTypes.INTEGER,
  classId: DataTypes.INTEGER,
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  dueDate: DataTypes.DATE
}, { sequelize, modelName: 'assignment' });

export default Assignment;