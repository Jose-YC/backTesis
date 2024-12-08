
import { prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CategoryDatasource } from "../../Domain/datasource/category.datasource";
import { CreateCategoryDtos } from "../../Domain/dtos/create.category.dtos";
import { UpdateCategoryDtos } from "../../Domain/dtos/update.category.dtos";
import { CategoryEntity } from "../../Domain/Entity/category.entity";


export class CategoryDatasourcesImp implements CategoryDatasource {

    async create(createCategory: CreateCategoryDtos): Promise<Boolean> {
        const category = await prisma.category.create({data: createCategory!})
        return !!category;
    }
    async getAll(dtos:PaginateDtos): Promise<PaginateResponse<CategoryEntity>> {
        const query: any = {};
        if (dtos.page > 0) {
            const skip = (dtos.page - 1) * dtos.lim;
            query.skip = skip;
            query.take = dtos.lim;

        } else {
            query.skip = 0 ;
        }
        const [total, categories] = await Promise.all([
            prisma.category.count(),
            prisma.category.findMany(query),
        ]);

        return {total, data:categories.map(category => CategoryEntity.fromObject(category))};
    }

    async getAllChildren(dtos:PaginateDtos): Promise<any> {
        const skip = (dtos.page - 1) * dtos.lim;
        const [total, categories] = await Promise.all([
            prisma.category.count(),
            prisma.category.findMany({
                include: {
                  children: true,
                },
            })
        ]);

        return {total, data:categories};
    }

    async getSearch(dtos:PaginateDtos): Promise<PaginateResponse<CategoryEntity>> {
        const query: any = {};
        if (dtos.page > 0) {
            const skip = (dtos.page - 1) * dtos.lim;
            query.skip = skip;
            query.take = dtos.lim;

        } else {
            query.skip = 0 ;
        }
        const [total, categories] = await Promise.all([
            prisma.category.count({
                where: {
                    OR: [
                        {name: {contains: dtos.search, mode: 'insensitive'}},
                    ]
                }
            }),
            prisma.category.findMany({
                where: {
                    OR: [
                        {name: {contains: dtos.search, mode: 'insensitive'}},
                    ]
                },
                ...query}),
        ]);

        return { total, data:categories.map(category => CategoryEntity.fromObject(category))};
    }
    async getId(id: number): Promise<CategoryEntity> {
        const category = await prisma.category.findFirst({where: { id }});
        if (!category) throw `Catgory not found`;
        return CategoryEntity.fromObject(category);
    }

    async update(updateCategory: UpdateCategoryDtos): Promise<Boolean> {
        await this.getId(updateCategory.id);
        const category = await prisma.category.update({where: {id: updateCategory.id}, data: updateCategory!.values});
        return !!category;
    }

    async delete(id: number): Promise<Boolean> {
        await this.getId(id);
        const category = await prisma.category.delete({where: {id}});
        return !!category;
    }
}