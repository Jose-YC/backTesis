import { CustomError } from "../../../Server";

export class UpdateProductDtos {

    private constructor(
        public readonly id:number,
        public readonly name:string,
        public readonly description:string,
    ){}

    get values(){
        const returnObj: {[key:string]: any}={}
        if (this.name) returnObj.name=this.name;
        if (this.description) returnObj.description=this.description;
        
        return returnObj;
    }

    static create(props: {[key:string]:any}): [string?, UpdateProductDtos?]{
        const {id, name, description} = props;
        
        if (!name){throw CustomError.badRequest('Missing name');}
        if (!description){throw CustomError.badRequest('Missing description');}
        
        return [undefined, new UpdateProductDtos(id, name, description)]
    }
}