import { Request, Response } from "express";
import { AuthRepository, Register, 
         RegisterDtos, Login, 
         LoginDtos, ConfirEmail, 
         Renew} from "../../";
import { errorHandler } from "../../../Server";

export class AuthController {

    constructor(
        private readonly authRepository:AuthRepository,
      
    ){}

    login = (req:Request, res:Response) =>  {
        const [ error, loginDto ] = LoginDtos.create(req.body);
        console.log(error)
        if (error) return res.json({Status:false, message: error});

        new Login(this.authRepository)
        .execute(loginDto!)
        .then(({user, token}) => res.json({Status:true, user, token }))
        .catch((error)=> errorHandler(error, res));
    }

    register = (req:Request, res:Response) =>  {
        const [ error, registerDto ] = RegisterDtos.create(req.body);
        if (error) return res.json({Status:false, message: error});
        new Register(this.authRepository)
        .execute(registerDto!)
        .then((resp) => {res.json({Status:true, resp})})
        .catch(error=> errorHandler(error, res));

    }

    validateEmail = (req:Request, res:Response) =>  {
        const {token} = req.params;

        new ConfirEmail(this.authRepository)
        .execute(token).then((Status) => {res.json({Status})})
        .catch(error=> errorHandler(error, res));
    }

    renew = async (req:Request, res:Response) =>  {
        const { user } = req.body;
        if (!user) return res.json({Status:false, message:'not logged in'});

        new Renew (this.authRepository)
        .execute(user.id)
        .then((token) => {res.json({user, token})})
        .catch(error=> errorHandler(error, res));
    }
}