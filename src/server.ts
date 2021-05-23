import {connectionsRouter} from "./routes/connections.routes"
import express from "express";

const app = express();
app.use(express.json());
app.use("/connections",connectionsRouter)

app.listen(8000, ()=> console.log("Server is Running"));