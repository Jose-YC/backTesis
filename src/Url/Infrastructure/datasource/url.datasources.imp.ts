import { prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateURLDtos, UpdateURLDtos, URLDatasource, URLEntity } from "../../Domain";


export class URLDatasourcesImp implements URLDatasource {

    async create(createURLDtos: CreateURLDtos): Promise<String> {
        const url_short = Math.random().toString(36).substring(2, 8);
        const url = await prisma.url.create({data: {...createURLDtos!, url_short}})
        return url.url_short;
    }
    async getAll(dtos:PaginateDtos): Promise<PaginateResponse<URLEntity>> {
        const skip = (dtos.page - 1) * dtos.lim;
        const [total, user] = await Promise.all([
            prisma.url.count(),
            prisma.url.findMany({skip, take: dtos.lim}),
        ]);

        const next = ( dtos.page < Math.ceil(total / dtos.lim)) ? `/user?page=${(dtos.page + 1)}&lim=${dtos.lim}` : null;
        const prev = (dtos.page-1 >= 0) ? `/user?page=${(dtos.page - 1)}&lim=${dtos.lim}` : null;

        return {next, prev, total, data: user.map(url => URLEntity.fromObject(url))};
    }
    async getAllUserURL(dtos:PaginateDtos): Promise<PaginateResponse<URLEntity>> {
        const skip = (dtos.page - 1) * dtos.lim;
        const [total, user] = await Promise.all([
            prisma.url.count(),
            prisma.url.findMany({where: {userId: dtos.id}, skip, take: dtos.lim}),
        ]);

        const next = ( dtos.page < Math.ceil(total / dtos.lim)) ? `/user?page=${(dtos.page + 1)}&lim=${dtos.lim}` : null;
        const prev = (dtos.page-1 >= 0) ? `/user?page=${(dtos.page - 1)}&lim=${dtos.lim}` : null;

        return {next, prev, total, data: user.map(url => URLEntity.fromObject(url))};
    }
    async getId(id: number): Promise<URLEntity> {
        const url = await prisma.url.findFirst({where: { id }});
        if (!url) throw `URL not found`;
        return URLEntity.fromObject(url);
    }
    async update(updateURLDtos: UpdateURLDtos): Promise<Boolean> {
        await this.getId(updateURLDtos.id);
        const url = await prisma.url.update({where: {id: updateURLDtos.id}, data: updateURLDtos!.values});
        return !!url;
    }
    async delete(id: number): Promise<Boolean> {
        await this.getId(id);
        const url = await prisma.url.delete({where: {id}});
        return !!url;
    }


}