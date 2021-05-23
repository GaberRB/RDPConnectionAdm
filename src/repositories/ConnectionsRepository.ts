import { Connection } from "../model/Connection"

interface ICreateConnectionsDTO{
    client: string;
    connection_name: string;
    address: string;
    domain: string;
    username: string;
    password: string;
    passworddb: string;
    passwordapp: string;
}

class ConnectionsRepository{

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