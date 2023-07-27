// routes are responsible for taking in an HTTP request and forwarding it to the correct controller

import { Express, Request, Response } from "express";

function routes(app: Express){
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200)) // curl http://localhost:3333/healthcheck
}

export default routes;