import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

export type UserRole = "Principal"|"Teacher"|"Student"|"Parent"|"OldStudent"|"Gateman"|"Bursar"|"PTA";

class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare role: UserRole;
  declare approved: boolean;
  declare twofaSecret: string | null;
}

User.init({
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
  role: DataTypes.STRING,
  approved: { type: DataTypes.BOOLEAN, defaultValue: false },
  twofaSecret: DataTypes.STRING
}, { sequelize, modelName: 'user' });

export default User;