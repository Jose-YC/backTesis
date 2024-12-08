import { CustomError } from "../../../Server";

export class UpdateMeasuresDtos {

    private constructor(
        public readonly id:number,
        public readonly abbrev:string,
        public readonly name:string,
    ){}

    get values(){
        const returnObj: {[key:string]: any}={}
        if (this.name) returnObj.name=this.name;
        if (this.abbrev) returnObj.abbrev=this.abbrev;
        
        return returnObj;
    }

    static create(props: {[key:string]:any}): [string?, UpdateMeasuresDtos?]{
        const {id, name, abbrev} = props;
        if (!id || isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!abbrev){throw CustomError.badRequest('Missing abbreviation');};
        if (!name){throw CustomError.badRequest('Missing name');}
        return [undefined, new UpdateMeasuresDtos(id, name, abbrev)]
    }
}