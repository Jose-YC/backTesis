
import { prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateProveedorDtos, ProveedorDatasource, ProveedorEntity, UpdateProveedorDtos } from "../../Domain";


export class ProveedorDatasourcesImp implements ProveedorDatasource {

    async create(createProveedor: CreateProveedorDtos): Promise<Boolean> {
        const supplier = await prisma.suppliers.create({data: createProveedor!})
        return !!supplier;
    }
    async getAll(dtos:PaginateDtos): Promise<PaginateResponse<ProveedorEntity>> {
        const skip = (dtos.page - 1) * dtos.lim;
        const [total, supplier] = await Promise.all([
            prisma.suppliers.count(),
            prisma.suppliers.findMany({skip, take:dtos.lim}),
        ]);

        const next = ( dtos.page < Math.ceil(total / dtos.lim)) ? `/Proveedor?page=${(dtos.page + 1)}&lim=${dtos.lim}` : null;
        const prev = (dtos.page-1 >= 0) ? `/Proveedor?page=${(dtos.page - 1)}&lim=${dtos.lim}` : null;

        return {next, prev, total, data:supplier.map(proveedor => ProveedorEntity.fromObject(proveedor))};
    }
    async getSearch(dtos:PaginateDtos): Promise<PaginateResponse<ProveedorEntity>> {
        const skip = (dtos.page - 1) * dtos.lim;
        const [total, suppliers] = await Promise.all([
            prisma.suppliers.count({
                where: {
                    OR: [
                        {repre: {contains: dtos.search, mode: 'insensitive'}},
                        {ruc: {contains: dtos.search, mode: 'insensitive'}},
                        {email: {contains: dtos.search, mode: 'insensitive'}},
                    ]
                }
            }),
            prisma.suppliers.findMany({
                where: {
                    OR: [
                        {repre: {contains: dtos.search, mode: 'insensitive'}},
                        {ruc: {contains: dtos.search, mode: 'insensitive'}},
                        {email: {contains: dtos.search, mode: 'insensitive'}},
                    ]
                },
                skip, 
                take:dtos.lim}),
        ]);

        const next = ( dtos.page < Math.ceil(total / dtos.lim)) ? `/Proveedor?page=${(dtos.page + 1)}&lim=${dtos.lim}` : null;
        const prev = (dtos.page-1 >= 0) ? `/Proveedor?page=${(dtos.page - 1)}&lim=${dtos.lim}` : null;

        return {next, prev, total, data:suppliers.map(supplier => ProveedorEntity.fromObject(supplier))};
    }
    async getId(id: number): Promise<ProveedorEntity> {
        const supplier = await prisma.suppliers.findFirst({where: { id }});
        if (!supplier) throw `Supplier not found`;
        return ProveedorEntity.fromObject(supplier);
    }
    async update(updateProveedor: UpdateProveedorDtos): Promise<Boolean> {
        await this.getId(updateProveedor.id);
        const supplier = await prisma.suppliers.update({where: {id: updateProveedor.id}, data: updateProveedor!.values});
        return !!supplier;
    }

    async delete(id: number): Promise<Boolean> {
        await this.getId(id);
        const supplier = await prisma.suppliers.delete({where: {id}});
        return !!supplier;
    }
}