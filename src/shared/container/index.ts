import {container} from "tsyringe"
import {IConnectionsRepository} from "../../modules/Connections/repositories/IConnectionsRepository"
import {ConnectionsRepository} from "../../modules/Connections/repositories/implementations/ConnectionsRepository"


//IConnectionsRepository
container.registerSingleton<IConnectionsRepository>(
    "ConnectionsRepository",
    ConnectionsRepository
)