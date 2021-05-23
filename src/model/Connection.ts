import { v4 as uuidV4 } from "uuid"

class Connection{
    id?: string;
    client: string;
    connection_name: string;
    address: string;
    domain?: string;
    username?: string;
    password?: string;
    passworddb?: string;
    passwordapp?: string;
    userconect?:  string;
    date?: Date;
    status?: string;

    constructor(){
        if(!this.id){
            this.id = uuidV4();
            this.userconect = null;
            this.date = null;
            this.status = 'A'
        }
    }

}

export {Connection}