import { LogConnections } from "../../model/LogConnections";
import { ILogConnectionsRepository, ILogConnectionsDTO } from "../ILogConnectionsRepository";


class LogConnectionsRepository implements ILogConnectionsRepository{
    private logConnections: LogConnections[];

    constructor(){
        this.logConnections = []
    }

    createConnect({ connection_name, userconnect, dateconnect }: ILogConnectionsDTO): void {
        const logConnections = new LogConnections();

        Object.assign(logConnections,{
            connection_name,
            userconnect,
            dateconnect: new Date(),
            
        })

        this.logConnections.push(logConnections)
        console.log(this.logConnections)
    }
    createDesconnect({ connection_name, userconnect, datedesconnect }: ILogConnectionsDTO): void {
        const connection = this.logConnections.find(
                                                conn => conn.connection_name === connection_name &&
                                                        conn.userconnect === userconnect && conn.dateconnect != null)
        this.logConnections.forEach(conn => {
            if (conn.id === connection.id){
                conn.datedesconnect = new Date()
            }
        })
        
        console.log(this.logConnections)
    }

}

export {LogConnectionsRepository}