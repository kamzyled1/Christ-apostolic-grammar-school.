import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Payment extends Model {
  declare id: number;
  declare studentId: number;
  declare amount: number;
  declare status: string;
  declare dueDate: Date;
}

Payment.init({
  studentId: DataTypes.INTEGER,
  amount: DataTypes.FLOAT,
  status: DataTypes.STRING,
  dueDate: DataTypes.DATE
}, { sequelize, modelName: 'payment' });

export default Payment;