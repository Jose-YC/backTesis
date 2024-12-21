import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../../User";
import { jwtAdapter } from "../../../config";


export class AuthMiddleware {

    constructor(
        private readonly userRepository:UserRepository,
    ){}

    public validateJWT = async (req:Request, res:Response, next:NextFunction) =>{
        const token = req.header('x-token');
        if (!token) return res.status(401).json({Status:false, message: 'No token provided'});
        
        try {
            const payload = await jwtAdapter.validatetetJWT<{id:number}>(token);
            if (!payload) return res.status(401).json({Status:false, message: 'Invalid token'});

            const resp = await this.userRepository.getId(payload.id)
            if (!resp) return res.status(401).json({Status:false, message: 'Invalid token'});

           req.body.user =resp;

           next();
            
        } catch (error) {
            res.status(500).json({Status:false, message: 'Internarl server error'})
        }

    }

    public validateRol (...roles: string[]){
        return (req:Request, res:Response, next:NextFunction) => {
        
            if ( !req.body.user ) return res.json({Status:false, message: 'Error token'});

            if ( !roles.includes( req.body.user.rolName ) ) return res.json({Status:false, message: 'Falta de permisos'});
            
            next();
        }
    }
}