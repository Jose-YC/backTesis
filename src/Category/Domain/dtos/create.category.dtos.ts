
import { CustomError } from "../../../Server";

export class CreateCategoryDtos {

    private constructor(
        public readonly name:string,
        public readonly description:string,
        public readonly parent_id?:number,
    ){}

    static create(props: {[key:string]:any}): [string?, CreateCategoryDtos?]{
        const { name, description, parent_id} = props;
        if (parent_id && isNaN(Number(parent_id))){throw CustomError.badRequest('Missing id category')};
        if (!name){throw CustomError.badRequest('Missing name');}
        if (!description){throw CustomError.badRequest('Missing description');}
        return [undefined, new CreateCategoryDtos( name, description, parent_id)] 
    }
}