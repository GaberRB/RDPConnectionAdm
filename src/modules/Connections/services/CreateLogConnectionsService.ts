import { ILogConnectionsRepository } from "../repositories/ILogConnectionsRepository"

interface IRequest{
    connection_name: string;
    userconnect: string;
    
}

class CreateLogConnectionsService{
    constructor(private logConnectionsRepository: ILogConnectionsRepository){

    }
    executeConnect({connection_name, userconnect}: IRequest){
       this.logConnectionsRepository.createConnect({
           connection_name,
           userconnect,
           dateconnect: new Date()
           
       })
    }
    executeDesconnect({connection_name, userconnect}: IRequest){
        this.logConnectionsRepository.createDesconnect({
            connection_name,
            userconnect,
            datedesconnect: new Date()
            
        })
     }
}

export {CreateLogConnectionsService}