import { Response } from "express";
import { HttpStatusCode } from "../../../Enum/enum";
import { CustomError } from "../errors/custom.error";

export const errorHandler = (err: Error, res: Response) => {

    if (err instanceof CustomError) {
        return res.status(err.httpCode).json({
            Status: false,
            message: err.message,
        });
    }


    console.error('Unhandled Error:', err);


    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
        Status: false,
        message: 'Something went wrong'
    });
};