
import { CustomError, prisma } from "../../../Server";
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

        return { total, data:roles.map(rol => RolEntity.fromObject(rol))};
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
        
        return {total, data:roles.map(rol => RolEntity.fromObject(rol))};
    }
    async getId(id: number): Promise<RolEntity> {
        const rol = await prisma.rol.findFirst({where: { id }});
        if (!rol) throw CustomError.badRequest('Rol no encontrado');

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