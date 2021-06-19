import { getRepository, Repository } from "typeorm";
import { Connections } from "../../entities/Connections"
import { IConnectionsRepository, ICreateConnectionsDTO } from "../IConnectionsRepository";


class ConnectionsRepository implements IConnectionsRepository{

    private repository: Repository<Connections>


    constructor(){
        this.repository = getRepository(Connections)

    }


    async create({client, connection_name, address, domain, username, password, passworddb, passwordapp }: ICreateConnectionsDTO): Promise<void>{
        const connection = this.repository.create({
            client,
            connection_name,
            address,
            domain,
            username,
            password,
            passworddb,
            passwordapp
        })    
        await this.repository.save(connection)

    }

    async list():Promise<Connections[]>{

        const connections = await this.repository.find()

        return connections
    }

    async findByConnectionName(connection_name: string): Promise<Connections>{
        const connection = await this.repository.findOne({connection_name})
        return connection
    }
}

export { ConnectionsRepository }