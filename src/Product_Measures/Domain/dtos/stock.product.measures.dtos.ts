import { UseCaseFindIdDto } from "./use.case.find.product";

export class StockItemsProductDtos extends UseCaseFindIdDto {

    private constructor(
        public readonly measures_id: number,
        public readonly product_id: number,
        public readonly stock: number,
      ) {
        super(measures_id, product_id);
      }
    

    static create(props: {[key:string]:any}): [string?, StockItemsProductDtos?]{
        const { measures_id, product_id, stock } = props;
        const [error, baseDto] = UseCaseFindIdDto.create({measures_id, product_id});
        if (error) return [error];
        if (!stock || isNaN(Number(stock))) return ['Stock must be a valid number'];
        return [undefined, new StockItemsProductDtos( baseDto!.measures_id, baseDto!.product_id, stock )] 
    }
}