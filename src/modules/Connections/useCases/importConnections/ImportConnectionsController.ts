import {Request, Response} from "express"
import { ImportConnectionsUseCase } from "./ImportConnectionsUseCase"


class ImportConnectionsController{
    constructor(private ImportConnectionsUseCase: ImportConnectionsUseCase){}

    handle(request: Request, response: Response):Response{
        const { file } = request
        
        this.ImportConnectionsUseCase.execute(file)

        return response.send()
    }
}

export {ImportConnectionsController}