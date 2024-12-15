import { Request, Response } from "express";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { CreateDetalleProductMeasures, CreateDetalleProductMeasuresDtos,
         GetByIdDetalleProductMeasures, DetalleProductMeasuresRepository, 
         UpdateDetalleProductMeasures, UpdateDetalleProductMeasuresDtos, 
         IncrementStockProductUseCase,
         DecrementStockProductUseCase,
         StockItemsProductDtos} from "../../Domain";
import { errorHandler } from "../../../Server";

export class DetalleProductMeasuresController {

    constructor(
        private readonly measuresRepository:DetalleProductMeasuresRepository,
    ){}


    public getIdDetalleProductMeasures = async (req:Request, res:Response) =>  {
        const measures_id = +req.params.measures_id;
        const product_id = +req.params.product_id;

        new GetByIdDetalleProductMeasures(this.measuresRepository)
        .execute(product_id, measures_id)
        .then(measures => res.json({Status:true, measures}))
        .catch(error=> errorHandler(error, res));
    }

    public postDetalleProductMeasures = async (req:Request, res:Response) =>  {
        const [ error, createDetalleProductMeasuresDtos ] = CreateDetalleProductMeasuresDtos.create(req.body);
        if (error) return res.json({Status:false, error});
    
        
        new CreateDetalleProductMeasures(this.measuresRepository)
        .execute(createDetalleProductMeasuresDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }

    public putDetalleProductMeasures = async (req:Request, res:Response) =>  {
        const measures_id = +req.params.measures_id;
        const product_id = +req.params.product_id;
        const [ error, updateDetalleProductMeasuresDtos ] = UpdateDetalleProductMeasuresDtos.create({...req.body, measures_id, product_id});
        if (error) return res.json({Status:false, error});

        new UpdateDetalleProductMeasures(this.measuresRepository)
        .execute(updateDetalleProductMeasuresDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }

    public putIncrementProductMeasures = async (req:Request, res:Response) =>  {
        const measures_id = +req.params.measures_id;
        const product_id = +req.params.product_id;
        const [ error, stockItemsProductDtos ] = StockItemsProductDtos.create({...req.body, measures_id, product_id});
        if (error) return res.json({Status:false, error});

        new IncrementStockProductUseCase(this.measuresRepository)
        .execute(stockItemsProductDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }

    public putDecrementProductMeasures = async (req:Request, res:Response) =>  {
        const measures_id = +req.params.measures_id;
        const product_id = +req.params.product_id;
        const [ error, stockItemsProductDtos ] = StockItemsProductDtos.create({...req.body, measures_id, product_id});
        if (error) return res.json({Status:false, error});

        new DecrementStockProductUseCase(this.measuresRepository)
        .execute(stockItemsProductDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }

}