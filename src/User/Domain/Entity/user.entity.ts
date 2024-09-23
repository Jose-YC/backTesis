import { CustomError } from "../../../Server";


export class UserEntity {

    constructor(
        public id:number,
        public email:string,
        public name:string,
        public lastname:string,
        public phone:string,
        public password:string,
        public emailValidate:boolean,
        public rolName:string[],
        public img?:string,
    ){}

    static fromObject= (object:{[key:string]:any} ):UserEntity => {
        const {id, email, name, lastname, phone, password, emailValidate, rolName, img} = object;
            if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
            if (!email){throw CustomError.badRequest('Missing email');}
            if (!name){throw CustomError.badRequest('Missing name');}
            if (!rolName){throw CustomError.badRequest('Missing rol');}
            if (!lastname){throw CustomError.badRequest('Missing last name');}
            if (!phone){throw CustomError.badRequest('Missing phone');}
        return new UserEntity(id, email, name, lastname, phone, password, emailValidate, rolName, img);
    }
}