import jwt from 'jsonwebtoken';
import { envs } from './plugins/envs.plugin';

export class jwtAdapter {

    static generatetJWT<T>(payload:any, duration: string = '2h'):Promise<T | null>{
        return new Promise((resolve) => {
            jwt.sign(payload, envs.SECRET_JWT, { expiresIn: duration }, 

                (err, token) => {
                if (err) return resolve(null);
                resolve(token as T);   
                }
            )
            
        });
    }

    static validatetetJWT<T>(token:string):Promise<T | null>{
        return new Promise((resolve) => {
            jwt.verify(token, envs.SECRET_JWT, 
                (err, decoded) => {
                    if (err) return resolve(null);
                    resolve(decoded as T);   
                    
            });
            
        });
    }
   
    
  
  }