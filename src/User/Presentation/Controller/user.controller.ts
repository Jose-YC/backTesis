import { Request, Response } from "express";

import { bcryptjsAdapter } from "../../../config";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { CreateUser, CreateUserDtos, DeleteUser, 
    GetAllUser, GetByIdUser, UpdatePassword, UpdatePasswordDtos, UpdateProfile, UpdateProfileDtos, UpdateUser, UpdateUserDtos, 
    UserRepository } from '../../';
import { SearchUser } from "../../Domain/UseCase/searchUser.usecase";

export class UserController {

    constructor(
        private readonly userRepository:UserRepository,
    ){}

    public getUser = async (req:Request, res:Response) =>  {
        const { page=0, lim=6 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, error});
        
        new GetAllUser(this.userRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> res.json({Status:false, error}));
       
    }

    public getSearchUser = async (req:Request, res:Response) =>  {
        const { page=0, lim=5 } = req.query;
        const search = req.params.search;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim, search);
        if (error) return res.json({Status:false, error});
        
       new SearchUser(this.userRepository)
       .execute(paginateDtos!)
       .then(data => res.json({data}))
       .catch(error=> res.json({Status:false, error}));
    }

    public getIdUser = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new GetByIdUser(this.userRepository)
        .execute(id)
        .then(user => res.json({user}))
        .catch(error=> res.json({Status:false, error}));
    }

    public postUser = async (req:Request, res:Response) =>  {
        const [ error, createUserDtos ] = CreateUserDtos.create(req.body);
        if (error) return res.json({Status:false, error});
        
        const password = bcryptjsAdapter.hash(createUserDtos!.password);
        
        new CreateUser(this.userRepository)
        .execute({...createUserDtos!, password})
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }

    public putProfile = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        const [ error, updateProfileDtos ] = UpdateProfileDtos.create({...req.body, id});
        if (error) return res.json({Status:false, error});
        
        new UpdateProfile(this.userRepository)
        .execute(updateProfileDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }

    public putUser = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        const [ error, updateUserDtos ] = UpdateUserDtos.create({...req.body, id});
        if (error) return res.json({Status:false, error});

        if (updateUserDtos!.password) {
            const password = bcryptjsAdapter.hash(updateUserDtos!.password);
            updateUserDtos!.password= password;
        }

        new UpdateUser(this.userRepository)
        .execute(updateUserDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }

    public putUserPassword = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        const [ error, updatePasswordDtos ] = UpdatePasswordDtos.create({...req.body, id});
        if (error) return res.json({Status:false, error});

        new UpdatePassword (this.userRepository)
        .execute(updatePasswordDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }


    public deleteUser = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        new DeleteUser(this.userRepository)
        .execute(id)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }
}