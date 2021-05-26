import {Router} from "express"
import { LogConnectionsRepository } from "../modules/Connections/repositories/LogConnectionsRepository";
import { CreateLogConnectionsService } from "../modules/Connections/services/CreateLogConnectionsService";

const logConnectionsRoutes = Router();

const logConnectionsRepository = new LogConnectionsRepository();

logConnectionsRoutes.post("/", (request, response)=>{
    const {userconnect, connection_name} = request.body
    const createLogConnectionsService = new CreateLogConnectionsService(logConnectionsRepository)

    createLogConnectionsService.executeConnect({connection_name, userconnect})

    return response.status(201).send()
})

logConnectionsRoutes.put("/", (request, response)=>{
    const {userconnect, connection_name} = request.body
    const createLogConnectionsService = new CreateLogConnectionsService(logConnectionsRepository)

    createLogConnectionsService.executeDesconnect({connection_name, userconnect})

    return response.status(204).send()
})



export {logConnectionsRoutes }