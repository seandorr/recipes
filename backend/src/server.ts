import express, { Request, Response } from "express";
import dotenv from "dotenv";
import recipesRoutes from "./routes/recipesRoutes";
import { connectDB } from "./config/db";
import rateLimiter from "./middleware/rateLimiter";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());
app.use(rateLimiter);

app.use("/api/recipes", recipesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
