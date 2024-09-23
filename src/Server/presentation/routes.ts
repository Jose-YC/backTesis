import { Router } from "express";
import { UserRoutes } from "../../User";
import { URLRoutes } from "../../Url/Presentation/Routes/url.routes";
import { RolRoutes } from "../../Rol/Presentation/Routes/rol.routes";
import { AuthRoutes } from "../../auth/Presentation/Routes/auth.routes";


export class AppRoutes {

    static get routes():Router{
        const router = Router();
        router.use('/user', UserRoutes.routes);
        router.use('/url', URLRoutes.routes);
        router.use('/rol', RolRoutes.routes);
        router.use('/auth', AuthRoutes.routes);

        return router;
    }
}