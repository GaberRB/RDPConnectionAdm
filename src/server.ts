import {connectionsRouter} from "./routes/connections.routes"
import { logConnectionsRoutes } from "./routes/logConnections.routes";
import express from "express";


const app = express();
app.use(express.json());
app.use("/connections",connectionsRouter)
app.use("/logconnections",logConnectionsRoutes)

app.listen(8000, ()=> console.log("Server is Running"));