import { DetalleProductCategoryEntity } from "../../../Product_Category";
import { DetalleProductMeasuresEntity } from "../../../Product_Measures";
import { CustomError } from "../../../Server";

export class ProductEntity {

    constructor(
        public id:number,
        public name:string,
        public description:string,
        public base_priece:number,
        public productImage:String[],
        public itemsMeasures:DetalleProductMeasuresEntity[],
        public itemsCategory:DetalleProductCategoryEntity[],
        
    ){}

    static fromObject= (object:{[key:string]:any} ):ProductEntity => {
        const {id, name, description, base_priece, ProductImage, ItemsMeasures, ItemsCategory} = object;
        if (!id|| isNaN(Number(id))){throw CustomError.badRequest('Missing id')};
        if (!base_priece|| isNaN(Number(base_priece))){throw CustomError.badRequest('Missing base_priece')};
        if (!name){throw CustomError.badRequest('Missing name');}
        if (!description){throw CustomError.badRequest('Missing description');}
        const itemMeasures = ItemsMeasures.map((object:{[key:string]:any}) => DetalleProductMeasuresEntity.fromObject(object));
        const itemCategory = ItemsCategory.map((object:{[key:string]:any}) => DetalleProductCategoryEntity.fromObject(object));

        return new ProductEntity(id, name, description, base_priece,ProductImage, itemMeasures, itemCategory);
    }
}