import { ConnectionsRepository } from "../../repositories/ConnectionsRepository";
import { ListConnectionsController } from "./ListConnectionsController";
import { ListConnectionsUseCase } from "./ListConnectionsUseCase";

const connectionsRepository = new ConnectionsRepository()
const listConnectionsUseCase = new ListConnectionsUseCase(connectionsRepository)
const listConnectionsController = new ListConnectionsController(listConnectionsUseCase);

export {listConnectionsController}