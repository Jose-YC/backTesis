import { Router } from "express";
import { UserRoutes } from "../../User";
import { RolRoutes } from "../../Rol/Presentation/Routes/rol.routes";
import { AuthRoutes } from "../../auth/Presentation/Routes/auth.routes";
import { ProveedorRoutes } from "../../Proveedor";
import { CategoryRoutes } from "../../Category/Presentation/Routes/category.routes";
import { MeasuresRoutes } from "../../Measures";
import { ProductRoutes } from "../../Product";
import { DetalleProductCategoryRoutes } from "../../Product_Category";
import { DetalleProductMeasuresRoutes } from "../../Product_Measures";
import { ClientRoutes } from "../../Client";
import { OrderRoutes } from "../../Order";
import { VentaRoutes } from "../../Venta";
import { VentaItemRoutes } from "../../VentaItem";


export class AppRoutes {

    static get routes():Router{
        const router = Router();
        router.use('/auth', AuthRoutes.routes);
        // //requiere autenticacion
        router.use('/measures', MeasuresRoutes.routes);
        router.use('/client', ClientRoutes.routes);
        router.use('/product/category', DetalleProductCategoryRoutes.routes);
        router.use('/product/measure', DetalleProductMeasuresRoutes.routes);
        router.use('/product', ProductRoutes.routes);
        router.use('/supplier', ProveedorRoutes.routes);
        router.use('/category', CategoryRoutes.routes);
        router.use('/user', UserRoutes.routes);
        router.use('/rol', RolRoutes.routes);
        router.use('/orden', OrderRoutes.routes);
        router.use('/sale', VentaRoutes.routes);
        router.use('/sale/details', VentaItemRoutes.routes);

        return router;
    }
}