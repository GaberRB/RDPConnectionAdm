import { Connection } from "../../model/Connection";
import { IConnectionsRepository } from "../../repositories/IConnectionsRepository";


class ListConnectionsUseCase{
    constructor(private connectionsRepository: IConnectionsRepository){

    }
    execute(): Connection[]{
        const connections = this.connectionsRepository.list()

        return connections
    }
}

export {ListConnectionsUseCase}