import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import mongoose from "mongoose";

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

app.get("/api/test", async (req: Request, res: Response) => {
  res.json({ message: "Hello from backend app!" });
});

const PORT = 7000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
