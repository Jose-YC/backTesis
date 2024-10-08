import { Router } from "express";
import { UserRoutes } from "../../User";
import { RolRoutes } from "../../Rol/Presentation/Routes/rol.routes";
import { AuthRoutes } from "../../auth/Presentation/Routes/auth.routes";
import { ProveedorRoutes } from "../../Proveedor";


export class AppRoutes {

    static get routes():Router{
        const router = Router();
        router.use('/auth', AuthRoutes.routes);
        //requiere autenticacion
        router.use('/supplier', ProveedorRoutes.routes);
        router.use('/user', UserRoutes.routes);
        router.use('/rol', RolRoutes.routes);

        return router;
    }
}