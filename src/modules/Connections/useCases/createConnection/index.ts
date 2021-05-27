import { ConnectionsRepository } from "../../repositories/implementations/ConnectionsRepository";
import { CreateConnectionUseCase } from "./CreateConnectionUseCase";
import { CreateConnectionController } from "./CreateConnetionController";


const connectionsRepository = ConnectionsRepository.getInstance()
const createConnectionUseCase = new CreateConnectionUseCase(connectionsRepository)
const createConnectionController = new CreateConnectionController(createConnectionUseCase)

export {createConnectionController}