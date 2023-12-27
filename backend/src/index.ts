import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";

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
