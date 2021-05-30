import { ImportConnectionsController } from "./ImportConnectionsController";
import { ImportConnectionsUseCase } from "./ImportConnectionsUseCase";


const importConnectionsUseCase = new ImportConnectionsUseCase();
const importConnectionsController = new ImportConnectionsController(importConnectionsUseCase);

export {importConnectionsController}