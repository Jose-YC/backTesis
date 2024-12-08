
import { prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { OrderItemDatasource, OrderItemEntity } from "../../Domain";



export class OrderItemDatasourcesImp implements OrderItemDatasource {


    async getAll(id:number): Promise<PaginateResponse<OrderItemEntity>> {
        const [total, orderItem] = await Promise.all([
            prisma.orderItem.count({where: { order_id: id}}),
            prisma.orderItem.findMany({
                where: { order_id: id}, 
            }),
        ]);
        return {total, data:orderItem.map((object) =>  OrderItemEntity.fromObject(object))};
    }
}