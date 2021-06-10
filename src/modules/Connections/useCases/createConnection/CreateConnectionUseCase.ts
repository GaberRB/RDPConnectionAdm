import { IConnectionsRepository } from "../../repositories/IConnectionsRepository"

interface IRequest{
    client: string;
    connection_name: string;
    address: string;
    domain: string;
    username: string;
    password: string;
    passworddb: string;
    passwordapp: string;
}


class CreateConnectionUseCase{
    constructor(private connectionsRepository: IConnectionsRepository){

    }
    execute({client, connection_name, address, domain, username, password, passworddb, passwordapp}: IRequest): void{
        const connectionAlreadyExists = this.connectionsRepository.findByConnectionName(connection_name)

        if(connectionAlreadyExists){
            throw new Error("Connection Already Exists")
        }
    
        this.connectionsRepository.create({ client, connection_name, address, domain, username, password, passworddb, passwordapp } )
    }
}


export {CreateConnectionUseCase}