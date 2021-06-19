import { ConnectionsRepository } from "../../repositories/implementations/ConnectionsRepository";
import { ListConnectionsController } from "./ListConnectionsController";
import { ListConnectionsUseCase } from "./ListConnectionsUseCase";

const connectionsRepository = null
const listConnectionsUseCase = new ListConnectionsUseCase(connectionsRepository)
const listConnectionsController = new ListConnectionsController(listConnectionsUseCase);

export {listConnectionsController}