import express from "express";
import product from "./backend/product.js";
import errorHandling from "./backend/error.js";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config();

// console.log(process.env.PORT);

const app = express();

const port = process.env.PORT ;

console.log(port)

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send(product);
});

app.use(errorHandling);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
