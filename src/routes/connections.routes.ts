import { Router } from "express";
import multer from "multer";


import { listConnectionsController } from "../modules/Connections/useCases/listConnections";
import { createConnectionController } from "../modules/Connections/useCases/createConnection";
import {importConnectionsController} from "../modules/Connections/useCases/importConnections";

const connectionsRouter = Router();

const upload = multer({
    dest: "./tmp",
})


connectionsRouter.post("/", (request, response) => {
    return createConnectionController.handle(request, response)
})

connectionsRouter.get("/", (request, response)=>{
    return listConnectionsController.handle(request, response)
})

connectionsRouter.post("/import", upload.single("file"), (request, response )=>{
    return importConnectionsController.handle(request, response)
})

export { connectionsRouter };
