import { ConnectionsRepository } from "../../repositories/implementations/ConnectionsRepository";
import { ImportConnectionsController } from "./ImportConnectionsController";
import { ImportConnectionsUseCase } from "./ImportConnectionsUseCase";

const connectionsRepository = null
const importConnectionsUseCase = new ImportConnectionsUseCase(connectionsRepository);
const importConnectionsController = new ImportConnectionsController(importConnectionsUseCase);

export {importConnectionsController}