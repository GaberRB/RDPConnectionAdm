import {Router} from "express"
import { createLogConnectionsController } from "../modules/Connections/useCases/createLogConnection";

const logConnectionsRoutes = Router();


logConnectionsRoutes.post("/", (request, response)=>{
    return createLogConnectionsController.handle(request, response)
})

logConnectionsRoutes.put("/", (request, response)=>{
    return createLogConnectionsController.handlePut(request, response)
})



export {logConnectionsRoutes }