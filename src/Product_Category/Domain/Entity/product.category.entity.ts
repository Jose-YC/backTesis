import { CategoryEntity } from "../../../Category";
import { CustomError } from "../../../Server";


export class DetalleProductCategoryEntity {

    constructor(
        public id:number,
        public category:CategoryEntity,
        public category_id:number,
        public product_id:number,
    ){}

    static fromObject= (object:{[key:string]:any} ):DetalleProductCategoryEntity => {
        const {id, category, category_id, product_id} = object;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!category_id || isNaN(Number(category_id))){throw CustomError.badRequest('Id category must be a valid number')}
        if (!product_id || isNaN(Number(product_id))){throw CustomError.badRequest('Id product must be a valid number')}
        const categoryEntity = CategoryEntity.fromObject(category);
        return new DetalleProductCategoryEntity(id, categoryEntity, category_id, product_id);
    }
}