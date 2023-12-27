import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users";

mongoose
  .connect(process.env.MONGODB_CONNECTION_URI as string)
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err.message);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/users", userRoutes);

const PORT = 7000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
