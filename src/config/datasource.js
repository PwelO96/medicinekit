import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
});

try {
  await AppDataSource.initialize();
  console.log("Data Source has been initlaized!");
} catch (err) {
  console.error("Error during Data Source initialization", err);
}

export default AppDataSource;
