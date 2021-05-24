import { Router } from "express";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";
import { CreateConnectionService } from "../services/CreateConnectionService";

const connectionsRouter = Router();

const connectionsRepository = new ConnectionsRepository()

connectionsRouter.post("/", (request, response) => {

    const { client, connection_name, address, domain, username, password, passworddb, passwordapp } = request.body

    const createConnectionService =  new CreateConnectionService(connectionsRepository);

    createConnectionService.execute({client, connection_name, address, domain, username, password, passworddb, passwordapp})

    return response.status(201).send()
})

connectionsRouter.get("/", (request, response)=>{
    
   const all = connectionsRepository.list()

   return response.json(all)
})

export { connectionsRouter };
