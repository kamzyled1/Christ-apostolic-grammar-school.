import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Announcement extends Model {
  declare id: number;
  declare userId: number;
  declare title: string;
  declare content: string;
  declare roles: string; // comma-separated for target roles
}

Announcement.init({
  userId: DataTypes.INTEGER,
  title: DataTypes.STRING,
  content: DataTypes.TEXT,
  roles: DataTypes.STRING
}, { sequelize, modelName: 'announcement' });

export default Announcement;
