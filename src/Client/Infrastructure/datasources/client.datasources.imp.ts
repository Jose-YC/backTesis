
import { CustomError, prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { ClientDatasource } from "../../Domain/datasource/client.datasource";
import { CreateClientDtos } from "../../Domain/dtos/create.client.dtos";
import { UpdateClientDtos } from "../../Domain/dtos/update.client.dtos";
import { ClientEntity } from "../../Domain/Entity/client.entity";


export class ClientDatasourcesImp implements ClientDatasource {

    async create(createClient: CreateClientDtos): Promise<Boolean> {
        const client = await prisma.client.create({data: createClient!})
        return !!client;
    }
    async getAll(dtos:PaginateDtos): Promise<PaginateResponse<ClientEntity>> {
        const query: any = {};
        if (dtos.page > 0) {
            const skip = (dtos.page - 1) * dtos.lim;
            query.skip = skip;
            query.take = dtos.lim;

        } else {
            query.skip = 0 ;
        }
        const [total, categories] = await Promise.all([
            prisma.client.count(),
            prisma.client.findMany(query),
        ]);

        return {total, data:categories.map(client => ClientEntity.fromObject(client))};
    }

    async getSearch(dtos:PaginateDtos): Promise<PaginateResponse<ClientEntity>> {
        const query: any = {};
        if (dtos.page > 0) {
            const skip = (dtos.page - 1) * dtos.lim;
            query.skip = skip;
            query.take = dtos.lim;

        } else {
            query.skip = 0 ;
        }
        const [total, categories] = await Promise.all([
            prisma.client.count({
                where: {
                    OR: [
                        {name: {contains: dtos.search, mode: 'insensitive'}},
                        {num_doc: {contains: dtos.search, mode: 'insensitive'}},
                    ]
                }
            }),
            prisma.client.findMany({
                where: {
                    OR: [
                        {name: {contains: dtos.search, mode: 'insensitive'}},
                        {num_doc: {contains: dtos.search, mode: 'insensitive'}},
                    ]
                },
                ...query}),
        ]);
        
        return { total, data:categories.map(client => ClientEntity.fromObject(client))};
    }
    async getId(num_doc: string): Promise<ClientEntity> {
        const client = await prisma.client.findFirst({where: { num_doc }});

        if (!client) throw CustomError.badRequest('Cliente no encontrado');
        return ClientEntity.fromObject(client);
    }

    async update(updateClient: UpdateClientDtos): Promise<Boolean> {
        await this.getId(updateClient.num_doc);
        const client = await prisma.client.update({where: {num_doc: updateClient.num_doc}, data: updateClient!.values});
        return !!client;
    }

    async delete(num_doc: string): Promise<Boolean> {
        await this.getId(num_doc);
        const client = await prisma.client.delete({where: {num_doc}});
        return !!client;
    }
}