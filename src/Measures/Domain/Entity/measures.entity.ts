import { CustomError } from "../../../Server";


export class MeasuresEntity {

    constructor(
        public id:number,
        public name:string,
        public abbrev:string,
    ){}

    static fromObject= (object:{[key:string]:any} ):MeasuresEntity => {
        const {id, name, abbrev} = object;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!name){throw CustomError.badRequest('Missing name');}
        if (!abbrev){throw CustomError.badRequest('Missing abbreviation');}
        return new MeasuresEntity(id, name, abbrev);
    }
}