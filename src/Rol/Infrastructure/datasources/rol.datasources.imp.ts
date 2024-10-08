import { prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateRolDtos, RolDatasource, RolEntity, UpdateRolDtos } from "../../Domain";

export class RolDatasourcesImp implements RolDatasource {

    async create(createRol: CreateRolDtos): Promise<Boolean> {
        const rol = await prisma.rol.create({data: createRol!});
        return !!rol;
    }
    async getAll(dtos:PaginateDtos): Promise<PaginateResponse<RolEntity>> {
        const query: any = {};
        if (dtos.page > 0) {
            const skip = (dtos.page - 1) * dtos.lim;
            query.skip = skip;
            query.take = dtos.lim;

        } else {
            query.skip = 0 ;
        }
        const [total, roles] = await Promise.all([
            prisma.rol.count(),
            prisma.rol.findMany(query),
        ]);

        const next = ( dtos.page < Math.ceil(total / dtos.lim)) ? `/user?page=${(dtos.page + 1)}&lim=${dtos.lim}` : null;
        const prev = (dtos.page-1 >= 0) ? `/user?page=${(dtos.page - 1)}&lim=${dtos.lim}` : null;

        return {next, prev, total, data:roles.map(rol => RolEntity.fromObject(rol))};
    }
    async getSearch(dtos:PaginateDtos): Promise<PaginateResponse<RolEntity>> {
        const skip = (dtos.page - 1) * dtos.lim;
        const [total, roles] = await Promise.all([
            prisma.rol.count(),
            prisma.rol.findMany({
                where: {
                    OR: [
                        {name: {contains: dtos.search, mode: 'insensitive'}},
                    ],
                },
                skip, 
                take:dtos.lim}),
        ]);

        const next = ( dtos.page < Math.ceil(total / dtos.lim)) ? `/user?page=${(dtos.page + 1)}&lim=${dtos.lim}` : null;
        const prev = (dtos.page-1 >= 0) ? `/user?page=${(dtos.page - 1)}&lim=${dtos.lim}` : null;

        return {next, prev, total, data:roles.map(rol => RolEntity.fromObject(rol))};
    }
    async getId(id: number): Promise<RolEntity> {
        const rol = await prisma.rol.findFirst({where: { id }});
        if (!rol) throw `Rol not found`;
        return RolEntity.fromObject(rol);
    }
    async update(updateRol: UpdateRolDtos): Promise<Boolean> {
        await this.getId(updateRol.id);
        const rol = await prisma.rol.update({where: {id: updateRol.id}, data: updateRol!.values});
        return !!rol;
    }
    async delete(id: number): Promise<Boolean> {
        await this.getId(id);
        const rol = await prisma.rol.delete({where: {id}});
        return !!rol;
    }


}