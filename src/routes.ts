// routes are responsible for taking in an HTTP request and forwarding it to the correct controller

import { Express, Request, Response } from "express";
import { createUserHandler } from "./controller/user.controller";
import validateResource from "./middleware/validateResource";
import { createUserSchema } from "./schema/user.schema";



function routes(app: Express){
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200)) // curl http://localhost:3333/healthcheck

    app.post('/api/users', validateResource(createUserSchema), createUserHandler)
}


export default routes;