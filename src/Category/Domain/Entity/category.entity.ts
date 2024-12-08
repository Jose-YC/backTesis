import { CustomError } from "../../../Server";


export class CategoryEntity {

    constructor(
        public id:number,
        public name:string,
        public description:string,
        public parent_id?:number,
    ){}

    static fromObject= (object:{[key:string]:any} ):CategoryEntity => {
        const {id, name, description, parent_id} = object;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!name){throw CustomError.badRequest('Missing name');}
        if (!description){throw CustomError.badRequest('Missing description');}
        return new CategoryEntity(id, name, description, parent_id);
    }
}