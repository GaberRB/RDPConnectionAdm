import { ConnectionsRepository } from "../../repositories/ConnectionsRepository";
import { CreateConnectionUseCase } from "./CreateConnectionUseCase";
import { CreateConnectionController } from "./CreateConnetionController";


const connectionsRepository = new ConnectionsRepository()
const createConnectionUseCase = new CreateConnectionUseCase(connectionsRepository)
const createConnectionController = new CreateConnectionController(createConnectionUseCase)

export {createConnectionController}