
import { CustomError, prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { MeasuresDatasource } from "../../Domain/datasource/measures.datasource";
import { CreateMeasuresDtos } from "../../Domain/dtos/create.measures.dtos";
import { UpdateMeasuresDtos } from "../../Domain/dtos/update.measures.dtos";
import { MeasuresEntity } from "../../Domain/Entity/measures.entity";


export class MeasuresDatasourcesImp implements MeasuresDatasource {

    async create(createMeasures: CreateMeasuresDtos): Promise<Boolean> {
        const measure = await prisma.measures.create({data: createMeasures!})
        return !!measure;
    }
    async getAll(dtos:PaginateDtos): Promise<PaginateResponse<MeasuresEntity>> {
        const query: any = {};
        if (dtos.page > 0) {
            const skip = (dtos.page - 1) * dtos.lim;
            query.skip = skip;
            query.take = dtos.lim;

        } else {
            query.skip = 0 ;
        }
        const [total, measures] = await Promise.all([
            prisma.measures.count(),
            prisma.measures.findMany(query),
        ]);

        return {total, data:measures.map(measure => MeasuresEntity.fromObject(measure))};
    }

    async getSearch(dtos:PaginateDtos): Promise<PaginateResponse<MeasuresEntity>> {
        const query: any = {};
        if (dtos.page > 0) {
            const skip = (dtos.page - 1) * dtos.lim;
            query.skip = skip;
            query.take = dtos.lim;

        } else {
            query.skip = 0 ;
        }
        const [total, measures] = await Promise.all([
            prisma.measures.count({
                where: {
                    OR: [
                        {name: {contains: dtos.search, mode: 'insensitive'}},
                    ]
                }
            }),
            prisma.measures.findMany({
                where: {
                    OR: [
                        {name: {contains: dtos.search, mode: 'insensitive'}},
                    ]
                },
                ...query}),
        ]);

        return { total, data:measures.map(measure => MeasuresEntity.fromObject(measure))};
    }
    async getId(id: number): Promise<MeasuresEntity> {
        const measure = await prisma.measures.findFirst({where: { id }});
        if (!measure) throw CustomError.badRequest('Medida no encontrada');
        return MeasuresEntity.fromObject(measure);
    }

    async update(updateMeasures: UpdateMeasuresDtos): Promise<Boolean> {
        await this.getId(updateMeasures.id);
        console.log(updateMeasures);
        const measure = await prisma.measures.update({where: {id: updateMeasures.id}, data: updateMeasures!.values});
        return !!measure;
    }

    async delete(id: number): Promise<Boolean> {
        await this.getId(id);
        const measure = await prisma.measures.delete({where: {id}});
        return !!measure;
    }
}