import { CustomError } from "../../../Server";


export class RolEntity {

    constructor(
        public id:number,
        public name:string,
    ){}

    static fromObject= (object:{[key:string]:any} ):RolEntity => {
        const {id, name} = object;
        if (!id|| isNaN(Number(id))) throw CustomError.badRequest('Missing id');
        if (!name) throw CustomError.badRequest('Missing name');
        return new RolEntity(id, name);
    }
}