import { CustomError } from "../../../Server";

export class CreateDetalleProductCategoryDtos {

    private constructor(
        public readonly category_id:number,
        public readonly product_id:number,
    ){}

    static create(props: {[key:string]:any}): [string?, CreateDetalleProductCategoryDtos?]{
        const { category_id,  product_id } = props;
        if (!category_id || isNaN(Number(category_id))) return ['Id category must be a valid number']
        if (product_id && isNaN(Number(product_id))) return ['Id product must be a valid number']
        return [undefined, new CreateDetalleProductCategoryDtos( category_id,  product_id )] 
    }
}