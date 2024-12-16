import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../../User";
import { jwtAdapter } from "../../../config";


export class AuthMiddleware {

    constructor(
        private readonly userRepository:UserRepository,
    ){}

    public validateJWT = async (req:Request, res:Response, next:NextFunction) =>{
        const token = req.header('x-token');
        if (!token) return res.status(401).json({message: 'No token provided'});
        
        try {
            const payload = await jwtAdapter.validatetetJWT<{id:number}>(token);
            if (!payload) return res.status(401).json({message: 'Invalid token'});

            const resp = await this.userRepository.getId(payload.id)
            if (!resp) return res.status(401).json({message: 'Invalid token - user'});

           req.body.user =resp;

           next();
            
        } catch (error) {
            res.status(500).json({message: 'Internarl server error'})
        }

    }

    public validateRol (...roles: string[]){
        return (req:Request, res:Response, next:NextFunction) => {
        
            if ( !req.body.user ) return res.status(500).json({message: 'Error token'});
    
            if ( !roles.includes( req.body.user.rol ) ) return res.status(401).json({message: 'Lack of permissions'});
            
            next();
        }
    }
}