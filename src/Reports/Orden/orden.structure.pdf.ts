import { StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { OrderEntityDtos } from "../../Order";
import { FooterStructure } from "../footer/footer.structure.pdf";
import { LogoStructure } from "../Logo/logo.structure.pdf";


const styles: StyleDictionary = {
    title: {
      fontSize: 18,
      bold: true,
      margin: [0, 0, 0, 10]
    },
    subTitle: {
      fontSize: 10,
      color: 'gray',
      margin: [0, 10, 0, 5]
    },
    detailTitle: {
      alignment: 'right',
      fontSize: 12,
      margin: [0, 10, 0, 5]
    },
    providerInfo: {
      margin: [0, 10, 0, 10]
    },
    tableExample: {
      margin: [0, 5, 0, 15]
    },
    total: {
      bold: true,
      fontSize: 14,
      margin: [0, 10, 0, 0]
    },
  };


export const OrdenStructure = (orden: OrderEntityDtos): TDocumentDefinitions => {

    const docDefinition: TDocumentDefinitions = {
        styles,
        footer: (currentPage, pageCount) => FooterStructure(currentPage, pageCount, 'es una orden de compra'),
        content:  [
          {
            columns: [
                {
                  text: [
                    LogoStructure('logo.png'),
                    {
                      text:  `Orden de Compra\n`,
                      style: 'title'
                    },
                    {
                      text: `Documento Oficial de Compra`,
                      style: 'subTitle'
                    },
                  ],
                },

                {
                  text: `Fecha de entrega: ${!orden.deliveredAt ? '--/--/---' : (orden.deliveredAt)}\nEstado: ${orden.state}`,
                  style: 'detailTitle'
                },
              ]
            },
            {
              text: `Informacion del Proveedor\nRuc: ${orden.proveedor.ruc}\nNombre: ${orden.proveedor.repre}\nDireccion: ${orden.proveedor.address}\nTel: ${orden.proveedor.phone}\nEmail: ${orden.proveedor.email}`,
              style: 'providerInfo'
            },
            {
              layout: 'customLayoutDark',
              style: 'tableExample',
              table: {
                headerRows: 1,
                widths: ['*', '*', 'auto', 'auto', 'auto'],
                body: [
                  [
                    { text: 'Producto', color: 'white' }, 
                    { text: 'Medida', color: 'white' }, 
                    { text: 'Cantidad', color: 'white' }, 
                    { text: 'Precio', color: 'white' }, 
                    { text: 'Sub Total', color: 'white' }
                  ],
                  ...orden.items.map(
                      (ordenItem) => 
                      [
                          ordenItem.product.name, 
                          ordenItem.measures.name, 
                          ordenItem.quantity, 
                          `S/. ${ordenItem.price.toFixed(2)}`, 
                          `S/. ${(ordenItem.price * ordenItem.quantity).toFixed(2)}`
                      ]
                  ) 
                ]
              }
            },
            {
              text: `Total: S/. ${orden.total}`,
              style: 'total'
            },
        ]
    };
    return docDefinition;
} 