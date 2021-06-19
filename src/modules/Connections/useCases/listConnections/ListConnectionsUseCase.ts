import { Connections } from "../../entities/Connections";
import { IConnectionsRepository } from "../../repositories/IConnectionsRepository";


class ListConnectionsUseCase{
    constructor(private connectionsRepository: IConnectionsRepository){

    }
    async execute(): Promise<Connections[]>{
        const connections = await this.connectionsRepository.list()

        return connections
    }
}

export {ListConnectionsUseCase}