import {Router} from "express"
import { connectionsRouter } from "./connections.routes"
import { logConnectionsRoutes } from "./logConnections.routes"

const router = Router();

router.use("/connections",connectionsRouter)
router.use("/logconnections",logConnectionsRoutes)

export { router }