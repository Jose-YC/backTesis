
import { CustomError } from "../../../Server";

export class CreateCategoryDtos {

    private constructor(
        public readonly name:string,
        public readonly description:string,
        public readonly parent_id?:number,
    ){}

    static create(props: {[key:string]:any}): [string?, CreateCategoryDtos?]{
        const { name, description, parent_id} = props;
        if (parent_id && isNaN(Number(parent_id)))return ['Codigo de la Categoria Root no valido'];
        if (!name) return ['Nombre vacio'];
        if (!description) return ['Descripcion vacia'];
        return [undefined, new CreateCategoryDtos( name, description, parent_id)] 
    }
}