import { regularExps } from "../../../config";
import { CustomError } from "../../../Server";

export class UpdateCategoryDtos {

    private constructor(
        public readonly id:number,
        public readonly name:string,
        public readonly description:string,
        public readonly parent_id?:number,
    ){}

    get values(){
        const returnObj: {[key:string]: any}={}
        if (this.name) returnObj.name=this.name;
        if (this.description) returnObj.description=this.description;
        if (this.parent_id) returnObj.parent_id=this.parent_id;
        
        return returnObj;
    }

    static create(props: {[key:string]:any}): [string?, UpdateCategoryDtos?]{
        const {id, name, description, parent_id} = props;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        // if (parent_id && isNaN(Number(parent_id))){throw CustomError.badRequest('Missing id category')};
        if (!name){throw CustomError.badRequest('Missing name');}
        if (!description){throw CustomError.badRequest('Missing description');}
        return [undefined, new UpdateCategoryDtos(id, name, description, parent_id)]
    }
}