import express, { Request, Response, NextFunction } from "express";
import eventModel from "../models/event";

const eventRouter = express.Router();

eventRouter.get("/api/event",async (req: Request, res: Response, next: NextFunction)=> {
    res.send("all events")
})

eventRouter.post("/api/event",async (req: Request, res: Response, next: NextFunction)=> {
    console.log(req.body)
    try {
        const newEvent = new eventModel(req.body);
        const createdEvent = await newEvent.save();
        res.status(201).send(createdEvent);
      } catch (error) {
        console.log(error)
      }
})

export default eventRouter;
