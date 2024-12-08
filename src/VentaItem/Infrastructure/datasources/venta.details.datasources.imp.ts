
import { prisma } from "../../../Server";
import { PaginateResponse } from "../../../Types/Pagination/pagination.type";
import { DashboardDtos } from "../../../Venta/Domain";
import { DashboardDetailsDtos, VentaItemDatasource, VentaItemEntity } from "../../Domain";



export class VentaItemDatasourcesImp implements VentaItemDatasource {


    async getAll(id:number): Promise<PaginateResponse<VentaItemEntity>> {
        const [total, orderItem] = await Promise.all([
            prisma.ventaItem.count({where: { venta_id: id}}),
            prisma.ventaItem.findMany({
                where: { venta_id: id}, 
            }),
        ]);
        return {total, data:orderItem.map((object) =>  VentaItemEntity.fromObject(object))};
    }
    async getCategoryMonth(startDate: Date, endDate: Date): Promise<DashboardDetailsDtos[]> {
        if (startDate >= endDate) throw ('Start date must be before end date');
        const categoryByMonth = (await prisma.$queryRaw`
        SELECT 
            c.name, 
            COUNT(v.id) AS total
        FROM 
            "VentaItem" AS v
        JOIN 
            "Product" AS p ON v.product_id = p.id
        JOIN 
            "ItemsCategory" AS ic ON p.id = ic.product_id
        JOIN 
            "Category" AS c ON ic.category_id = c.id
        WHERE 
            v."createdAt" >= ${startDate}
            AND v."createdAt" < ${endDate}
        GROUP BY c.name
        ORDER BY total DESC
        `) as Array<{
            name: string;
            total: number;
        }>;
        if (!categoryByMonth) return [];

        return categoryByMonth.map((obj) => DashboardDetailsDtos.fromObject(obj));
    }
    async getProductTop(startDate: Date, endDate: Date): Promise<DashboardDetailsDtos[]> {

        if (startDate >= endDate) throw ('Start date must be before end date');
        
        const productByMonth = (await prisma.$queryRaw`
        SELECT 
            p.name as name, m.name as medida,
            SUM(v.quantity) AS total
        FROM 
            "VentaItem" v
        JOIN 
            "Product" p ON v.product_id = p.id
        JOIN 
            "Measures" m ON v.mesures_id = m.id
        WHERE 
            v."createdAt" >= ${startDate}
            AND v."createdAt" <= ${endDate}
        GROUP BY 
            p.name, m.name
        ORDER BY 
            total DESC
        LIMIT 10;
        `) as Array<{
            name: string;
            medida: string;
            total: number;
        }>;
        if (!productByMonth) return [];
       
        return productByMonth.map((obj) => DashboardDetailsDtos.fromObject(obj));
    }
    async getProductSale(startDate: Date, endDate: Date): Promise<DashboardDtos[]> {

        if (startDate >= endDate) throw ('Start date must be before end date');
        
        const productByMonth = (await prisma.$queryRaw`
        SELECT 
            EXTRACT(YEAR FROM "createdAt") AS year,
            EXTRACT(MONTH FROM "createdAt") AS month, 
            SUM(v.quantity) AS total
        FROM 
            "VentaItem" v
      
        WHERE 
            v."createdAt" >= ${startDate}
            AND v."createdAt" <= ${endDate}
        GROUP BY year, month
        ORDER BY year, month;
        `) as Array<{
            year: number;
            month: number;
            total: number;
        }>;

        if (!productByMonth) return [];
        return productByMonth.map((obj) => DashboardDtos.fromObject(obj));
    }
    async getQuantityProductDay(startDate: Date, endDate: Date): Promise<DashboardDtos[]> {
        if (startDate >= endDate) throw new Error('Start date must be before end date');
        
        const productQuantity = (await prisma.$queryRaw`
            SELECT 
                EXTRACT("createdAt") AS year,
                EXTRACT(MONTH FROM "createdAt") AS month,
                EXTRACT(DAY FROM "createdAt") AS day, 
                COUNT(v.quantity) AS total
            FROM "VentaItem"
            WHERE 
                "createdAt" >= ${startDate} AND "createdAt" <= ${endDate}
            GROUP BY year, month, day
            ORDER BY year, month, day;
        `)as Array<{
            year: number;
            month: number;
            day: number;
            total: number;
        }>;
        if (!productQuantity) return [];
        return productQuantity.map((obj) => DashboardDtos.fromObject(obj));
    }
}