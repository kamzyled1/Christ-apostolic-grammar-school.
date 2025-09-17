import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

// Connect to MySQL
const sequelize = new Sequelize(
  process.env.DB_NAME as string,      // database name
  process.env.DB_USER as string,      // username
  process.env.DB_PASSWORD as string,  // password
  {
    host: process.env.DB_HOST,        // database host (like localhost or Render URL)
    dialect: "mysql",                 // 👈 changed to mysql
    logging: false,                   // no spam in console
  }
);

export default sequelize;
