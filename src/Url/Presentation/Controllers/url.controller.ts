import { Request, Response } from "express";

import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";  
import { CreateURLDtos, UpdateURLDtos,
         URLRepository, GetAllURL, 
         GetAllUserURL, GetByIdURL, 
         CreateURL, UpdateURL, 
         DeleteURL } from "../../";


export class URLController {

    constructor(
        private readonly urlRepository:URLRepository,
    ){}

    public getURL = (req:Request, res:Response) =>  {
        const { page=0, lim=0 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+lim, +page);
        if (error) return res.json({Status:false, error});

        new GetAllURL(this.urlRepository)
        .execute(paginateDtos!)
        .then(urls => res.json({urls}))
        .catch(error=> res.json({Status:false, error}));
    }

    public getUserURL = (req:Request, res:Response) =>  {
        const id = +req.params.id;
        const { page=0, lim=0 } = req.query;
        const [error, paginateDtos] = PaginateDtos.create(+lim, +page,'', id);
        if (error) return res.json({Status:false, error});

        new GetAllUserURL(this.urlRepository)
        .execute(paginateDtos!)
        .then(urls => res.json({urls}))
        .catch(error=> res.json({Status:false, error}));
    }

    public getIdURL = (req:Request, res:Response) =>  {
        const id = +req.params.id;

       new GetByIdURL(this.urlRepository)
        .execute(id)
        .then(url => res.json({url}))
        .catch(error=> res.json({Status:false, error}));
    }

    public postURL = (req:Request, res:Response) =>  {
        const {url_original, option, password, user} = req.body
        const [ error, createURLDtos ] = CreateURLDtos.create({url_original, option, password, user});
        if (error) {return res.json({Status:false, error})};
        
        new CreateURL(this.urlRepository)
        .execute(createURLDtos!)
        .then((url) => {res.json({Status:true, url})})
        .catch((error)=> {res.json({Status:false, error})});
    }

    public putURL = (req:Request, res:Response) =>  {
        const id = +req.params.id;
        const [ error, updateURLDtos ] = UpdateURLDtos.create({...req.body, id});
        if (error) return res.json({Status:false, error});
        
        new UpdateURL(this.urlRepository)
        .execute(updateURLDtos!)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }

    public deleteURL = (req:Request, res:Response) =>  {
        const id = +req.params.id;
        
        new DeleteURL(this.urlRepository)
        .execute(id)
        .then(Status => res.json({Status}))
        .catch(error=> res.json({Status:false, error}));
    }
}