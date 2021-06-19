import { Connections } from "../entities/Connections";

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

interface IConnectionsRepository{
    findByConnectionName(connection_name: string): Promise<Connections>;
    list(): Promise<Connections[]>;
    create({client, connection_name, address, domain, username, password, passworddb, passwordapp}: ICreateConnectionsDTO): Promise<void>;
}

export {IConnectionsRepository, ICreateConnectionsDTO}