import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/medicineRoutes.js";
import medicineRouters from "./routes/medicineRouters.js";
import errorHandling from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", userRoutes);
app.use("/api", medicineRouters);

// Error handlig middleware
app.use(errorHandling);

// Server running
app.listen(port, () => {
  console.log(`Server is running on http:localhost:PORT: ${port}`);
});
