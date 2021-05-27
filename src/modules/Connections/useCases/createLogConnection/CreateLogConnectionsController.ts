import {Request, Response} from "express"
import { CreateLogConnectionsUseCase } from "./CreateLogConnectionsUseCase"

class CreateLogConnectionsController{

    constructor(private createLogConnetionsUseCase: CreateLogConnectionsUseCase){}

    handle(request: Request, response: Response):Response{
        const {userconnect, connection_name} = request.body
    
        this.createLogConnetionsUseCase.executeConnect({connection_name, userconnect})
    
        return response.status(201).send()
    }

    handlePut(request: Request, response: Response):Response{
        const {userconnect, connection_name} = request.body
    
        this.createLogConnetionsUseCase.executeDesconnect({connection_name, userconnect})
    
        return response.status(204).send()
    }
}

export {CreateLogConnectionsController}