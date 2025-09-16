import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Suspension extends Model {
  declare id: number;
  declare studentId: number;
  declare reason: string;
  declare startDate: Date;
  declare endDate: Date;
}

Suspension.init({
  studentId: DataTypes.INTEGER,
  reason: DataTypes.TEXT,
  startDate: DataTypes.DATE,
  endDate: DataTypes.DATE
}, { sequelize, modelName: 'suspension' });

export default Suspension;