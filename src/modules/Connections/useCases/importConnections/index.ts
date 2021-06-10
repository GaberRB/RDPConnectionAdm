import { ConnectionsRepository } from "../../repositories/implementations/ConnectionsRepository";
import { ImportConnectionsController } from "./ImportConnectionsController";
import { ImportConnectionsUseCase } from "./ImportConnectionsUseCase";

const connectionsRepository = ConnectionsRepository.getInstance();
const importConnectionsUseCase = new ImportConnectionsUseCase(connectionsRepository);
const importConnectionsController = new ImportConnectionsController(importConnectionsUseCase);

export {importConnectionsController}