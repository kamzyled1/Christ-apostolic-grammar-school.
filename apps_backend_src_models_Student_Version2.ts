import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db';

class Student extends Model {
  declare id: number;
  declare name: string;
  declare class: string;
  declare parentId: number;
}

Student.init({
  name: DataTypes.STRING,
  class: DataTypes.STRING,
  parentId: DataTypes.INTEGER
}, { sequelize, modelName: 'student' });

export default Student;