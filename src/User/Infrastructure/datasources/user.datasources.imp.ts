import { prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateUserDtos, UpdateProfileDtos, UpdateUserDtos, UserDatasource, UserEntity } from "../../Domain";
import { UpdatePhotoDtos } from "../../Domain/dtos/updatePhoto";

export class UserDatasourcesImp implements UserDatasource {

    async create(createUser: CreateUserDtos): Promise<Boolean> {
        const user = await prisma.user.create({data: createUser!})
        return !!user;
    }
    async getAll(dtos:PaginateDtos): Promise<PaginateResponse<UserEntity>> {
        const skip = (dtos.page - 1) * dtos.lim;
        const [total, user] = await Promise.all([
            prisma.user.count(),
            prisma.user.findMany({skip, take:dtos.lim}),
        ]);

        const next = ( dtos.page < Math.ceil(total / dtos.lim)) ? `/user?page=${(dtos.page + 1)}&lim=${dtos.lim}` : null;
        const prev = (dtos.page-1 >= 0) ? `/user?page=${(dtos.page - 1)}&lim=${dtos.lim}` : null;

        return {next, prev, total, data:user.map(user => UserEntity.fromObject(user))};
    }
    async getSearch(dtos:PaginateDtos): Promise<PaginateResponse<UserEntity>> {
        const skip = (dtos.page - 1) * dtos.lim;
        const [total, user] = await Promise.all([
            prisma.user.count({
                where: {
                    OR: [
                        {email: {contains: dtos.search, mode: 'insensitive'}},
                        {name: {contains: dtos.search, mode: 'insensitive'}},
                        {rolName: {contains: dtos.search, mode: 'insensitive'}},
                    ]
                }
            }),
            prisma.user.findMany({
                where: {
                    OR: [
                        {email: {contains: dtos.search, mode: 'insensitive'}},
                        {name: {contains: dtos.search, mode: 'insensitive'}},
                        {rolName: {contains: dtos.search, mode: 'insensitive'}},
                    ]
                },
                skip, 
                take:dtos.lim}),
        ]);

        const next = ( dtos.page < Math.ceil(total / dtos.lim)) ? `/user?page=${(dtos.page + 1)}&lim=${dtos.lim}` : null;
        const prev = (dtos.page-1 >= 0) ? `/user?page=${(dtos.page - 1)}&lim=${dtos.lim}` : null;

        return {next, prev, total, data:user.map(user => UserEntity.fromObject(user))};
    }
    async getId(id: number): Promise<UserEntity> {
        const user = await prisma.user.findFirst({where: { id }});
        if (!user) throw `User not found`;
        return UserEntity.fromObject(user);
    }
    async update(updateUser: UpdateUserDtos): Promise<Boolean> {
        await this.getId(updateUser.id);
        const user = await prisma.user.update({where: {id: updateUser.id}, data: updateUser!.values});
        return !!user;
    }
    async profile(updateProfileDtos:UpdateProfileDtos): Promise<Boolean> {
        await this.getId(updateProfileDtos.id);
        console.log(updateProfileDtos!.values);
        const user = await prisma.user.update({where: {id: updateProfileDtos.id}, data: updateProfileDtos!.values})
        return !!user;
    }
    async image(UpdatePhotoDtos:UpdatePhotoDtos): Promise<Boolean> {
        const user = await prisma.user.update({where: {id: UpdatePhotoDtos.id}, data: UpdatePhotoDtos!.values})
        return !!user;
    }
    async delete(id: number): Promise<Boolean> {
        await this.getId(id);
        const user = await prisma.user.delete({where: {id}});
        return !!user;
    }
}