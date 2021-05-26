import { Connection } from "../model/Connection";

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
    findByConnectionName(connection_name: string): Connection;
    list(): Connection[];
    create({client, connection_name, address, domain, username, password, passworddb, passwordapp}: ICreateConnectionsDTO): void;
}

export {IConnectionsRepository, ICreateConnectionsDTO}