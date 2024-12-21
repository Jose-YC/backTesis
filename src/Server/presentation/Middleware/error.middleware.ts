import { NextFunction, Request, Response } from "express";
import { CustomError } from "../../domain";
import { HttpStatusCode } from "../../../Enum/enum";

export const errorHandlerMiddleware = ( error: Error, req:Request, res:Response, next:NextFunction ) => {

    if (error instanceof CustomError) {
            return res.json({
                Status: false,
                message: error.message,
            });
    }

    console.error('Error no controlado:', error);

    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        Status: false,
        message: 'Error en el servidor'
    });
}

export const notFoundHandler = ( req: Request, res: Response,  next: NextFunction ) => {
    const error = CustomError.notfaund('No tiene acceso a esta ruta');
    next(error);
};

  
