import { CustomError } from "../../../Server";
import { UserEntity } from "../../../User";


export class AuthEntityDtos {

    constructor(
        public user:UserEntity,
        public token:string,

    ){}

    static fromObject= (object:{[key:string]:any} ):AuthEntityDtos => {
        const {user, token, } = object;
        
        const userEntity = UserEntity.fromObject(user);
        if (!token){throw CustomError.badRequest('No se genero el token');}
            
        return new AuthEntityDtos(userEntity, token);
    }
}