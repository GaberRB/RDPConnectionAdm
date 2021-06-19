import { Request, Response } from "express"
import {container} from "tsyringe"

import { CreateConnectionUseCase } from "./CreateConnectionUseCase";

class CreateConnectionController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { client, connection_name, address, domain, username, password, passworddb, passwordapp } = request.body

        const createConnectionUseCase = container.resolve(CreateConnectionUseCase)

        await createConnectionUseCase.execute({ client, connection_name, address, domain, username, password, passworddb, passwordapp })

        return response.status(201).send()
    }

}

export { CreateConnectionController }