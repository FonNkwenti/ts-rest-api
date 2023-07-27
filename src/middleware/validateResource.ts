// provide a schema in the middleware to validate the request. For example when created a user, an email and password are required. We will make sure they are both present and the values are of type string

import { Request, Response, NextFunction } from "express";

import { AnyZodObject } from "zod";

// curring technique used to execute the funcion with schema inside our middleware
const validate = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction) => {

    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params
        
        })
    } catch (error: any) {
        return res.status(400).send(error.errors);
    
        
    }

}

export default validate