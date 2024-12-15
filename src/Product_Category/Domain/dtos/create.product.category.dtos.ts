export class CreateDetalleProductCategoryDtos {

    private constructor(
        public readonly category_id:number,
        public readonly product_id:number,
    ){}

    static create(props: {[key:string]:any}): [string?, CreateDetalleProductCategoryDtos?]{
        const { category_id,  product_id } = props;
        if (!category_id || isNaN(Number(category_id))) return ['Codigo de la categoria no valida']
        if (product_id && isNaN(Number(product_id))) return ['Codigo del producto no valido']
        return [undefined, new CreateDetalleProductCategoryDtos( category_id,  product_id )] 
    }
}