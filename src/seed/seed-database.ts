import { prisma } from '../Server';
import { initialData } from './seed';

async function main() {

    await prisma.client.deleteMany();
    await prisma.rol.deleteMany();
    await prisma.user.deleteMany();
    await prisma.category.deleteMany();
    await prisma.measures.deleteMany();
    await prisma.product.deleteMany();
    await prisma.suppliers.deleteMany();
    await prisma.itemsMeasures.deleteMany();
    await prisma.itemsCategory.deleteMany();
    await prisma.order.deleteMany();
    await prisma.orderItem.deleteMany();
    await prisma.venta.deleteMany();
    await prisma.ventaItem.deleteMany();

    const { category, products, users, measures, suplier, rol} = initialData;

    await prisma.rol.createMany({
        data: rol
    });
    await prisma.user.createMany({
        data: users
    });
 
    await prisma.measures.createMany({
        data: measures
    });
    await prisma.suppliers.createMany({
        data: suplier
    });
    await prisma.category.createMany({
        data: category
    });



    products.forEach( async(product) => {

        const { ItemsCategory, ItemsMeasures, ProductImage, name, base_priece, description } = product;
    
        const dbProduct = await prisma.product.create({
          data: {
            name,
            base_priece,
            description,
           
            ItemsMeasures:{ createMany: { data: ItemsMeasures.map(object => object)}},
            ItemsCategory:{ createMany: { data: ItemsCategory.map(object => object)}},

          }
        })
    
    
        // Images
        const imagesData = ProductImage.map( image => ({
          url: image,
          product_id: dbProduct.id
        }));
    
        await prisma.productImage.createMany({
          data: imagesData
        });
    
      });

}



( () => {
  
  
    main();
  } )();