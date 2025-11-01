import express, { Request, Response } from "express";
import recipesRoutes from "./routes/recipesRoutes";
import { connectDB } from "./config/db";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use("/api/recipes", recipesRoutes);

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello Worldsss");
});

app
  .listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
