import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../../User";
import { jwtAdapter } from "../../../config";
import { CustomError } from "../../../Server";


export class AuthMiddleware {

    constructor(
        private readonly userRepository:UserRepository,
    ){}

    public validateJWT = async (req:Request, res:Response, next:NextFunction) =>{
        const token = req.header('x-token');
        if (!token) return next(CustomError.unAuthorized('No se proporciona ningún token'));
        try {
            const payload = await jwtAdapter.validatetetJWT<{id:number}>(token);
            if (!payload) return next(CustomError.unAuthorized('Token invalido'));
            
            const resp = await this.userRepository.getId(payload.id)
            if (!resp) return next(CustomError.unAuthorized('Token invalido'));

           req.body.user =resp;

           next();
            
        } catch (error) {
            return next(CustomError.internalServer('Error en el servidor'));
        }

    }

    public validateRol (...roles: string[]){
        return (req:Request, res:Response, next:NextFunction) => {
        
            if ( !req.body.user ) return next(CustomError.unAuthorized('Token invalido'));

            if ( !roles.includes( req.body.user.rolName ) ) return next(CustomError.unAuthorized('Falta de Permisos'));
            next();
        }
    }
}