import { Response } from "express";
import { HttpStatusCode } from "../../../Enum/enum";
import { CustomError } from "../errors/custom.error";

export const errorHandler = (err: Error, res: Response) => {

    if (err instanceof CustomError) {
        return res.json({
            Status: false,
            message: err.message,
        });
    }


    console.error('Error no controlado:', err);


    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        Status: false,
        message: 'Error en el servidor'
    });
};