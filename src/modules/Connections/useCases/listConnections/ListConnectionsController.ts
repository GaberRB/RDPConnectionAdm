import { Request, Response } from "express"
import { ListConnectionsUseCase } from "./ListConnectionsUseCase"

class ListConnectionsController {
    constructor(private listConnectionsUseCase: ListConnectionsUseCase){}
    handle(request: Request, response: Response): Response {

        const all = this.listConnectionsUseCase.execute()

        return response.json(all)
    }
}

export { ListConnectionsController }