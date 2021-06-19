import { Request, Response } from "express"
import { ListConnectionsUseCase } from "./ListConnectionsUseCase"

class ListConnectionsController {
    constructor(private listConnectionsUseCase: ListConnectionsUseCase){}
    async handle(request: Request, response: Response): Promise<Response> {

        const all = await this.listConnectionsUseCase.execute()

        return response.json(all)
    }
}

export { ListConnectionsController }