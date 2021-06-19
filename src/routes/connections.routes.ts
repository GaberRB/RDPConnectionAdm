import { Router } from "express";
import multer from "multer";

import { CreateConnectionController } from "../modules/Connections/useCases/createConnection/CreateConnetionController";
import { listConnectionsController } from "../modules/Connections/useCases/listConnections";
import {importConnectionsController} from "../modules/Connections/useCases/importConnections";


const connectionsRouter = Router();

const upload = multer({
    dest: "./tmp",
})

const createConnectionController = new CreateConnectionController()

connectionsRouter.post("/", createConnectionController.handle)

connectionsRouter.get("/", (request, response)=>{
    return listConnectionsController.handle(request, response)
})

connectionsRouter.post("/import", upload.single("file"), (request, response )=>{
    return importConnectionsController.handle(request, response)
})

export { connectionsRouter };
