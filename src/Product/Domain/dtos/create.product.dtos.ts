import { CreateDetalleProductCategoryDtos } from "../../../Product_Category";
import { CreateDetalleProductMeasuresDtos } from "../../../Product_Measures";
import { CustomError } from "../../../Server";

export class CreateProductDtos {

    private constructor(
        public readonly name:string,
        public readonly description:string,
        public readonly category:CreateDetalleProductCategoryDtos[],
        public readonly measures:CreateDetalleProductMeasuresDtos[],
        public readonly img:[],
    ){}

    static create(props: {[key:string]:any}): [string?, CreateProductDtos?]{
        const { name, description, category, measures, img} = props;
        if (!name){throw CustomError.badRequest('Missing name');}
        if (!description){throw CustomError.badRequest('Missing description');}
        return [undefined, new CreateProductDtos(name, description, JSON.parse(category), JSON.parse(measures), img)] 
    }
}