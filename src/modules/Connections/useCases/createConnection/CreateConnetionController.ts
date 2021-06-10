import { Request, Response } from "express"
import { CreateConnectionUseCase } from "./CreateConnectionUseCase";

class CreateConnectionController {

    constructor(private createConnectionUseCase: CreateConnectionUseCase){

    }

    handle(request: Request, response: Response): Response {

        const { client, connection_name, address, domain, username, password, passworddb, passwordapp } = request.body

        this.createConnectionUseCase.execute({ client, connection_name, address, domain, username, password, passworddb, passwordapp })

        return response.status(201).send()
    }

}

export { CreateConnectionController }