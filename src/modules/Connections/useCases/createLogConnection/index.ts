import { LogConnectionsRepository } from "../../repositories/implementations/LogConnectionsRepository";
import { CreateLogConnectionsController } from "./CreateLogConnectionsController";
import { CreateLogConnectionsUseCase } from "./CreateLogConnectionsUseCase";


const logConnectionsRepository = new LogConnectionsRepository();
const createLogConnetionsUseCase = new CreateLogConnectionsUseCase(logConnectionsRepository);
const createLogConnectionsController = new CreateLogConnectionsController(createLogConnetionsUseCase);

export{createLogConnectionsController}