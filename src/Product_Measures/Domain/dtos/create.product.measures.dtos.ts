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
        if (!measures_id || isNaN(Number(measures_id))) return ['Codigo de la Medida no valida']
        if (product_id && isNaN(Number(product_id))) return ['Codigo del producto no valido']
        if (!stock || isNaN(Number(stock))) return ['Stock del producto no valido']
        if (!min_stock || isNaN(Number(min_stock))) return ['Stock Minimo del producto no valido']
        if (!price || isNaN(Number(price))) return ['Precio del producto no valido']
        if (!income || isNaN(Number(income))) return ['Ganancia del producto no valido']
        return [undefined, new CreateDetalleProductMeasuresDtos( measures_id, stock, min_stock, price, product_id, income )] 
    }
}