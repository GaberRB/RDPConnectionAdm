import { Router } from "express";

import { ConnectionsRepository } from "../modules/Connections/repositories/implementations/ConnectionsRepository";
import { listConnectionsController } from "../modules/Connections/useCases/listConnections";
import { createConnectionController } from "../modules/Connections/useCases/createConnection";


const connectionsRouter = Router();


connectionsRouter.post("/", (request, response) => {
    return createConnectionController.handle(request, response)
})

connectionsRouter.get("/", (request, response)=>{
    return listConnectionsController.handle(request, response)
})

export { connectionsRouter };
