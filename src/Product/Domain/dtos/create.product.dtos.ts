import { CreateDetalleProductCategoryDtos } from "../../../Product_Category";
import { CreateDetalleProductMeasuresDtos } from "../../../Product_Measures";
import { CustomError } from "../../../Server";

export class CreateProductDtos {

    private constructor(
        public readonly name:string,
        public readonly description:string,
        public readonly category:CreateDetalleProductCategoryDtos[],
        public readonly measures:CreateDetalleProductMeasuresDtos[],
        public readonly img:String[],
    ){}

    static create(props: {[key:string]:any}): [string?, CreateProductDtos?]{
        const { name, description, category, measures, img} = props;
        if (!name) return ['Nombre vacio'];
        if (!description) return ['Descripcion vacia'];

        const itemsCategoryEntity = category.map((object:{[key:string]:any}) => {
            const [ error, itemsCategorydtos ] = CreateDetalleProductCategoryDtos.create(object)
            if (error) return [error];
            return itemsCategorydtos;
        });

        const itemsMeasuresEntity = measures.map((object:{[key:string]:any}) => {
            const [ error, itemsMeasuresdtos ] = CreateDetalleProductMeasuresDtos.create(object)
            if (error) return [error];
            return itemsMeasuresdtos;
        });
        
        return [undefined, new CreateProductDtos(name, description, itemsCategoryEntity, itemsMeasuresEntity, img)] 
    }
}