import { Router } from "express";
import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

const connectionsRouter = Router();

const connectionsRepository = new ConnectionsRepository()

connectionsRouter.get("/connections", (request, response) => {
    return response.status(200).json({ messagem: "hello World" })
})

connectionsRouter.post("/", (request, response) => {

    const { client, connection_name, address, domain, username, password, passworddb, passwordapp } = request.body

    const connectionAlreadyExists = connectionsRepository.findByConnectionName(connection_name)

    if(connectionAlreadyExists){
        return response.status(400).json({error: "Connection Already Exists!"})
    }

    connectionsRepository.create({ client, connection_name, address, domain, username, password, passworddb, passwordapp } )

    return response.status(201).send()
})

connectionsRouter.get("/", (request, response)=>{
    
   const all = connectionsRepository.list()

   return response.json(all)
})

export { connectionsRouter };
