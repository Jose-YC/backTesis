export class CreateDetalleProductMeasuresDtos {

    private constructor(
        public readonly measures_id:number,
        public readonly stock:number,
        public readonly min_stock:number,
        public readonly price:number,
        public readonly product_id:number,
        public readonly income:number,
    ){}

    static create(props: {[key:string]:any}): [string?, CreateDetalleProductMeasuresDtos?]{
        const { measures_id, stock, product_id, min_stock, price, income } = props;
        if (!measures_id || isNaN(Number(measures_id))) return ['Id category must be a valid number']
        if (product_id && isNaN(Number(product_id))) return ['Id product must be a valid number']
        if (!stock || isNaN(Number(stock))) return ['value must be a valid number']
        if (!min_stock || isNaN(Number(min_stock))) return ['value must be a valid number']
        if (!price || isNaN(Number(price))) return ['price must be a valid number']
        return [undefined, new CreateDetalleProductMeasuresDtos( measures_id, stock, min_stock, price, product_id, income )] 
    }
}