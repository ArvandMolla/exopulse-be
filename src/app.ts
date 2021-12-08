import express, { Application } from "express";
import cors from "cors";
import mongoose from "mongoose";
import eventRouter from "./api/eventsAPI";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.use(eventRouter);

const port: number = 5000;

if (!process.env.MONGO_CONNECTION) {
  throw new Error("No Mongo Url defined!");
}

mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => {
    app.listen(port, () => {
      console.log("✅✅✅ Running on port", port);
    });
  })
  .catch((err) => console.log(err));
