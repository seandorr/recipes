import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get("/", (request: Request, response: Response) => {
  response.status(200).send("Hello World");
});

app
  .listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
