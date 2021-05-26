import {v4 as uuidv4} from "uuid"

class LogConnections{
    id?: string;
    connection_name: string;
    userconnect: string;
    dateconnect?: Date;
    datedesconnect?: Date;
    created_at?: Date;

    constructor(){
        if(!this.id){
            this.id = uuidv4();
            this.created_at = new Date()
        }
    }
}

export {LogConnections}