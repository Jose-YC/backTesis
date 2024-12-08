
export class UpdateDetalleProductMeasuresDtos {

    private constructor(
        public readonly measures_id:number,
        public readonly product_id:number,
        public readonly stock:number,
        public readonly min_stock:number,
        public readonly price:number,
        public readonly income:number,
    ){}

    get values(){
        const returnObj: {[key:string]: any}={}
        if (this.min_stock) returnObj.min_stock=this.min_stock;
        if (this.stock) returnObj.stock=this.stock;
        if (this.price) returnObj.price=this.price;
        if (this.income) returnObj.price=this.income;
        return returnObj;
    }

    static create(props: {[key:string]:any}): [string?, UpdateDetalleProductMeasuresDtos?]{
        const { measures_id,  product_id, min_stock, price, stock, income} = props;
        if (!measures_id || isNaN(Number(measures_id))) return ['Id medida must be a valid number']
        if (!product_id || isNaN(Number(product_id))) return ['Id product must be a valid number']
        if (!min_stock || isNaN(Number(min_stock))) return ['stock minimo must be a valid number']
        if (!stock || isNaN(Number(stock))) return ['stock must be a valid number']
        if (!price || isNaN(Number(price))) return ['price must be a valid number']
        return [undefined, new UpdateDetalleProductMeasuresDtos( measures_id,  product_id, stock, min_stock, price, income)]
    }
}