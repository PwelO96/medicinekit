import { DataSource } from "typeorm";
import { Users } from "../entities/Users";
import dotenv from "dotenv";

dotenv.config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  entities: [Users],
  synchronize: true,
  logging: true,
});

try {
  await AppDataSource.initialize();
  console.log("Data Source has been initlaized!");
} catch (err) {
  console.error("Error during Data Source initialization", err);
}

export default AppDataSource;
