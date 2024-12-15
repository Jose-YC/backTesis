import { bcryptjsAdapter } from "../../../config";
import { CustomError, prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { CreateUserDtos, UpdatePasswordDtos, UpdateProfileDtos, UpdateUserDtos, UserDatasource, UserEntity } from "../../Domain";
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

        return {total, data:user.map(user => UserEntity.fromObject(user))};
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

        return {total, data:user.map(user => UserEntity.fromObject(user))};
    }
    async getId(id: number): Promise<UserEntity> {
        const user = await prisma.user.findFirst({where: { id }});
        if (!user) throw CustomError.badRequest('Usuario no encontrado');

        return UserEntity.fromObject(user);
    }
    async update(updateUser: UpdateUserDtos): Promise<Boolean> {
        await this.getId(updateUser.id);
        const user = await prisma.user.update({where: {id: updateUser.id}, data: updateUser!.values});
        return !!user;
    }
    async profile(updateProfileDtos:UpdateProfileDtos): Promise<Boolean> {
        await this.getId(updateProfileDtos.id);
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

    async updatePassword(updatePassword: UpdatePasswordDtos): Promise<Boolean> {    
        const user = await prisma.user.findFirst({where:{id:updatePassword.id}});
        if (!user) throw CustomError.badRequest('Usuario no encontrado');
        
        const validPasword = bcryptjsAdapter.compare(updatePassword!.oldPassword, user.password,);
        if (!validPasword) throw CustomError.badRequest('Password incorrecta');

        const password = bcryptjsAdapter.hash(updatePassword!.password);

        const passwordNew = await prisma.user.update({
            where: {id: updatePassword.id}, 
            data: {password}
        });

        return !!passwordNew;
    } 
}