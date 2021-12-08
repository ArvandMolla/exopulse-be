import express, { Application } from "express";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import { ConnectionOptions } from "tls";
import eventRouter from './api/eventsAPI'

const app: Application = express()

app.use(cors());
app.use(express.json());

app.use(eventRouter)

const port: number = 5000; 
// mongoose
//   .connect("mongodb+srv://ArvandAdmin:Shahab44@cluster0.c8kh0.mongodb.net/exopulse?authSource=admin&replicaSet=atlas-h3p6db-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   } as ConnectOptions, ()=> {
//     app.listen(port, () => {
//     console.log("✅✅✅ Running on port", port);
//   }
//   )})

if (!process.env.MONGO_CONNECTION) {
  throw new Error("No Mongo Url defined!")
}
  
mongoose.connect(process.env.MONGO_CONNECTION).then( () => {
  app.listen(port, () => {
    console.log("✅✅✅ Running on port", port);
  })

})

  

 