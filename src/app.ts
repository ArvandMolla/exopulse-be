import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";

const app: Application = express()

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction)=> {
    res.send("hello")
})

const port = 5000; 
app.listen(port, () => {
    console.log("✅✅✅ Running on port", port);
  })