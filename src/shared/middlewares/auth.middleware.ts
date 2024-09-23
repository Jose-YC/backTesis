import { NextFunction, Request, Response } from "express";
import { jwtAdapter } from "../../config";
import { GetByIdUser, UserRepository } from "../../User";

export class AuthMiddleware {

    constructor(
        private readonly userRepository:UserRepository,
    ){}

    public optionalValidateJWT = async (req:Request, res:Response, next:NextFunction) =>{
        const token = req.header('x-token');
        if (token) {
            try {
                const payload = await jwtAdapter.validatetetJWT<{id:number}>(token);
                if (!payload) return res.status(401).json({error: 'Invalid token'});
    
               const resp = await new GetByIdUser(this.userRepository).execute(payload.id);
               if (!resp) return res.status(401).json({error: 'Invalid token - user'});
    
               req.body.user =resp;
    
               return next();
                
            } catch (error) {
                res.status(500).json({error: 'Internarl server error'})
            }
        }

        return next();
    }

    public validateJWT = async (req:Request, res:Response, next:NextFunction) =>{
        const token = req.header('x-token');
        if (!token) return res.status(401).json({error: 'No token provided'});
        
        try {
            const payload = await jwtAdapter.validatetetJWT<{id:number}>(token);
            if (!payload) return res.status(401).json({error: 'Invalid token'});

           const resp = await new GetByIdUser(this.userRepository).execute(payload.id);
           if (!resp) return res.status(401).json({error: 'Invalid token - user'});

           req.body.user =resp;

           next();
            
        } catch (error) {
            res.status(500).json({error: 'Internarl server error'})
        }

    }

    static validateRol (...roles: string[]){
        return (req:Request, res:Response, next:NextFunction) => {
        
            if ( !req.body.user ) return res.status(500).json({error: 'Error token'});
    
            if ( !roles.includes( req.body.user.rol ) ) return res.status(401).json({error: 'Lack of permissions'});
            
            next();
        }
    }
}