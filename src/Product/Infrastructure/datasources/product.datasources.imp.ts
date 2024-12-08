
import { prisma } from "../../../Server";
import { PaginateDtos } from "../../../shared/domain/dto/pagination.dtos";
import { PaginateResponse } from "../../../Types";
import { CreateProductDtos, ProductDatasource, ProductEntity, ProductEntityDtos, UpdateProductDtos } from "../../Domain";
import {v2 as cloudinary} from 'cloudinary';
import { envs } from '../../../config/plugins/envs.plugin';
cloudinary.config( envs.CLOUDINARY_URL ?? '' );



export class ProductDatasourcesImp implements ProductDatasource {

    private async uploadImages (images: any[]){
        const uploadPromises = images.map( async( image ) => {
              const { secure_url } = await cloudinary.uploader.upload(image.tempFilePath)
                if (!secure_url) { throw `imagen no se pudo ingresar` }
                return secure_url;
        });

        const uploadedImages = await Promise.all( uploadPromises );     
        return uploadedImages;
    }

    async create(createProduct: CreateProductDtos): Promise<Boolean> {

        const images = await this.uploadImages(createProduct.img);
        if ( !images ) {
            throw `imagenes no se pudieron ingresar`;
        }   

        const product = await prisma.product.create({
            data: {
                name: createProduct!.name,
                base_priece: createProduct!.measures[0].price,
                description: createProduct!.description,
                ItemsCategory: {
                    createMany:{
                        data : createProduct!.category.map(object => ({ category_id: object.category_id }))
                    }
                },

                ItemsMeasures: {
                    createMany:{
                        data : createProduct!.measures.map(object => ({ 
                            measures_id: object.measures_id,
                            stock: object.stock,
                            min_stock: object.min_stock,
                            price: object.price,
                            income: object.income,

                        }))
                    }
                },

                ProductImage: {
                    createMany:{
                        data: images.map(object => ({ url: object }))
                    }
                }

            }
        });
        

        return !!product;
        
    }
    async getAll(dtos:PaginateDtos): Promise<PaginateResponse<ProductEntity>> {
        const skip = (dtos.page - 1) * dtos.lim;
        const [total, products] = await Promise.all([
            prisma.product.count(),
            prisma.product.findMany({
                include: {
                    ItemsCategory: {
                        include: {
                        category: true
                        }
                    },
                    ItemsMeasures: {
                        include: {
                        measures: true
                        }
                    },
                    ProductImage:true
                  },
                skip, take:dtos.lim
            }),
        ]);

        return {total, data:products.map(product => ProductEntity.fromObject(product))};
    }
    async getAllProduct(dtos:PaginateDtos): Promise<PaginateResponse<ProductEntityDtos>> {
        const skip = (dtos.page - 1) * dtos.lim;
        const [total, products] = await Promise.all([
            prisma.product.count(),
            prisma.product.findMany({
                include: { ProductImage:true},
                skip, take:dtos.lim
            }),
        ]);
        
        return {total, data:products.map(product => ProductEntityDtos.fromObject(product))};
    }
    async getSearch(dtos:PaginateDtos): Promise<PaginateResponse<ProductEntity>> {
        const skip = dtos.page > 0 ? (dtos.page - 1) * dtos.lim : 0;
        const [total, products] = await Promise.all([
            prisma.product.count({
                where: {
                    OR: [
                        {name: {contains: dtos.search, mode: 'insensitive'}},
                    ],
                },
            }),
            prisma.product.findMany({
                where: {
                    OR: [
                        {name: {contains: dtos.search, mode: 'insensitive'}},
                    ]
                },
                include: {
                    ItemsCategory: {
                        include: {
                        category: true
                        }
                    },
                    ItemsMeasures: {
                        include: {
                        measures: true
                        }
                    },
                    ProductImage:true
                  },
                skip,
                take: dtos.page > 0 ? dtos.lim : undefined
                 }),
        ]);

          return {total, data:products.map(product => ProductEntity.fromObject(product))};
    }
    async getSearchProduct(dtos:PaginateDtos): Promise<PaginateResponse<ProductEntityDtos>> {
        const skip = dtos.page > 0 ? (dtos.page - 1) * dtos.lim : 0;
        const [total, products] = await Promise.all([
            prisma.product.count({
                where: {
                    OR: [
                        {name: {contains: dtos.search, mode: 'insensitive'}},
                    ]
                },
            }),
            prisma.product.findMany({
                where: {
                    OR: [
                        {name: {contains: dtos.search, mode: 'insensitive'}},
                    ]
                },
                include: { ProductImage:true},
                skip,
                take: dtos.page > 0 ? dtos.lim : undefined
                 }),
        ]);
          return {total, data:products.map(product => ProductEntityDtos.fromObject(product))};
    }
    async getId(id: number): Promise<ProductEntity> {
        const product = await prisma.product.findFirst({
            where: { id },
            include: {
                ItemsCategory: {
                    include: {
                    category: true
                    }
                },
                ItemsMeasures: {
                    include: {
                    measures: true
                    }
                },
                ProductImage:true
              },
        });

        if (!product) throw `product not found`;
        return ProductEntity.fromObject(product);
    }
    async getIdProduct(id: number): Promise<ProductEntityDtos> {
        const product = await prisma.product.findFirst({where: { id }, include: { ProductImage:true},});

        if (!product) throw `product not found`;
        return ProductEntityDtos.fromObject(product);
    }
    async update(updateProduct: UpdateProductDtos): Promise<Boolean> {
        await this.getId(updateProduct.id);
        const product = await prisma.product.update({
            where: {id: updateProduct.id}, 
            data: updateProduct!.values
        });
        return !!product;
    }
    async delete(id: number): Promise<Boolean> {
        await this.getId(id);
        const product = await prisma.product.delete({where: {id}});
        return !!product;
    }
}