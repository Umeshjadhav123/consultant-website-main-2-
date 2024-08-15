import express from "express";
import dotenv, { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";
import authRouter from "./route/auth.route.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    allowedHeaders: ["Authorization", "Content-Type"],
  })
);

app.use("/api/auth", authRouter);

app.listen(PORT, async () => {
  console.log(`Server is runs on http://localhost:${PORT}`);
  await connectDB();
});
