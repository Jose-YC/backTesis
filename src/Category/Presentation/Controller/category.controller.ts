import { Request, Response } from "express";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { CategoryRepository } from "../../Domain/repositories/category.repository";
import { CreateCategoryDtos } from "../../Domain/dtos/create.category.dtos";
import { UpdateCategoryDtos } from "../../Domain/dtos/update.category.dtos";
import { GetAllCategory } from "../../Domain/UseCase/getAll.category.usecase";
import { SearchCategory } from "../../Domain/UseCase/search.category.usecase";
import { GetByIdCategory } from "../../Domain/UseCase/getById.category.usecase";
import { CreateCategory } from "../../Domain/UseCase/create.category.usecase";
import { UpdateCategory } from "../../Domain/UseCase/update.category.usecase";
import { DeleteCategory } from "../../Domain/UseCase/delete.category.usecase";
import { GetAllChildrenCategory } from "../../Domain/UseCase/getAllChildren.category.usecase";
import { errorHandler } from "../../../Server";

export class CategoryController {

    constructor(
        private readonly categoryRepository:CategoryRepository,
    ){}

    public getCategory = async (req:Request, res:Response) =>  {
        const { page=0, lim=6 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, error});
        
        new GetAllCategory(this.categoryRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> errorHandler(error, res));
       
    }

    public getChildrenCategory = async (req:Request, res:Response) =>  {
        const { page=0, lim=6 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim);
        if (error) return res.json({Status:false, error});
        
        new GetAllChildrenCategory(this.categoryRepository)
        .execute(paginateDtos!)
        .then(data => res.json({data}))
        .catch(error=> errorHandler(error, res));
       
    }

    public getSearchCategory = async (req:Request, res:Response) =>  {
        const { page=0, lim=5 } = req.query;
        const search = req.params.search;
        const [error, paginateDtos] = PaginateDtos.create(+page, +lim, search);
        if (error) return res.json({Status:false, error});
        
       new SearchCategory(this.categoryRepository)
       .execute(paginateDtos!)
       .then(data => res.json({data}))
       .catch(error=> errorHandler(error, res));
    }

    public getIdCategory = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new GetByIdCategory(this.categoryRepository)
        .execute(id)
        .then(category => res.json({Status:true, category}))
        .catch(error=> errorHandler(error, res));
    }

    public postCategory = async (req:Request, res:Response) =>  {
        const [ error, createCategoryDtos ] = CreateCategoryDtos.create(req.body);
        if (error) return res.json({Status:false, error});
        
        new CreateCategory(this.categoryRepository)
        .execute(createCategoryDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }

    public putCategory = async (req:Request, res:Response) =>  {
        const id = +req.params.id;
        const [ error, updateCategoryDtos ] = UpdateCategoryDtos.create({...req.body, id});
        if (error) return res.json({Status:false, error});

        new UpdateCategory(this.categoryRepository)
        .execute(updateCategoryDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }


    public deleteCategory = async (req:Request, res:Response) =>  {
        const id = +req.params.id;

        new DeleteCategory(this.categoryRepository)
        .execute(id)
        .then(Status => res.json({Status}))
        .catch(error=> errorHandler(error, res));
    }
}