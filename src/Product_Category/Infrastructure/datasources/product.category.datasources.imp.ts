
import { prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { DetalleProductCategoryDatasource } from "../../Domain/datasource/product.category.datasource";
import { CreateDetalleProductCategoryDtos } from "../../Domain/dtos/create.product.category.dtos";
import { DetalleProductCategoryEntity } from "../../Domain/Entity/product.category.entity";


export class DetalleProductCategoryDatasourcesImp implements DetalleProductCategoryDatasource {

    async create(createDetalleProductCategory: CreateDetalleProductCategoryDtos): Promise<Boolean> {
        const detalleProductCategory = await prisma.itemsCategory.create({data: createDetalleProductCategory!})
        return !!detalleProductCategory;
    }
    async getAll(dtos:PaginateDtos): Promise<PaginateResponse<DetalleProductCategoryEntity>> {
        const skip = (dtos.page - 1) * dtos.lim;
        const [total, detalleProductCategory] = await Promise.all([
            prisma.itemsCategory.count(),
            prisma.itemsCategory.findMany({
                where: { product_id: dtos.id}, 
                include: {
                    category: true, 
                },
                skip, take:dtos.lim

            }),
        ]);

        return {total, data:detalleProductCategory.map((object) => {
            return DetalleProductCategoryEntity.fromObject({
                id: object.id, 
                name: object.category.name, 
                category_id: object.category_id, 
                product_id: object.product_id})
        })};
    }

    async getId(product_id: number, category_id: number): Promise<DetalleProductCategoryEntity> {
        const itemsCategory = await prisma.itemsCategory.findFirst({
            where: { product_id, category_id },
            include: {
                category: true, 
            },
        });
        if (!itemsCategory) throw `Detalle not found`;
        return  DetalleProductCategoryEntity.fromObject({
            id: itemsCategory.id, 
            name: itemsCategory.category.name, 
            category_id: itemsCategory.category_id, 
            product_id: itemsCategory.product_id})
        }

    async delete(product_id: number, category_id: number): Promise<Boolean> {
        await this.getId(product_id, category_id);
        const itemsCategory = await prisma.itemsCategory.deleteMany({
            where: {
            AND:[
            {product_id},
            {category_id}
            ]
        }});
        return !!itemsCategory;
    }
}