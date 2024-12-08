export class UseCaseFindIdDto {

    protected constructor(
        public readonly measures_id:number,
        public readonly product_id:number,

    ){}

    static create(props: {[key:string]:any}): [string?, UseCaseFindIdDto?]{
        const { measures_id, product_id } = props;
        if (!measures_id || isNaN(Number(measures_id))) return ['Id measure must be a valid number']
        if (!product_id || isNaN(Number(product_id))) return ['Id product must be a valid number']
        return [undefined, new UseCaseFindIdDto(measures_id, product_id )] 
    }
}