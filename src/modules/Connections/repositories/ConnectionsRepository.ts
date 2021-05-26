import { Connection } from "../model/Connection"
import { IConnectionsRepository, ICreateConnectionsDTO } from "./IConnectionsRepository";



class ConnectionsRepository implements IConnectionsRepository{

    private connections: Connection[] = []

    constructor(){
        this.connections = []
    }

    create({client, connection_name, address, domain, username, password, passworddb, passwordapp }: ICreateConnectionsDTO): void{
        const connection = new Connection() ;
    
        Object.assign(connection, {
            client,
            connection_name,
            address,
            domain,
            username,
            password,
            passworddb,
            passwordapp
        })
    
        this.connections.push(connection)

    }

    list():Connection[]{

        return this.connections;
    }

    findByConnectionName(connection_name: string): Connection{
        const connection = this.connections.find(connection => connection.connection_name === connection_name)

        return connection
    }
}

export { ConnectionsRepository }