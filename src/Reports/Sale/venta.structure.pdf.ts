import { StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { VentaEntityDtos } from "../../Venta";

const styles: StyleDictionary = {
    header: {
        fontSize: 13,
        bold: true,
        alignment: 'center',
      },
      title: {
        fontSize: 11,
        alignment: 'center',
      },
      subtitle: {
        fontSize: 9,
        alignment: 'center',
      },
      subheader: {
        fontSize: 12,
        alignment: 'center',
        margin: [0, 0, 0, 10]
      },
      infoTable: {
        alignment: 'center',
        margin: [0, 10, 0, 10]
      },
      infototal: {

        margin: [0, 0, 0, 20]
      },
      note: {
        fontSize: 10,
        italics: true,
        color: 'gray'
      },
      sectionHeader: {
        fontSize: 12,
        bold: true,
        alignment: 'center',
        margin: [0, 10, 0, 5]
      },
      ticketContent: {
        alignment: 'left',
        fontSize: 9,
      },

      ticketContentClient: {
        alignment: 'center',
        fontSize: 9,
      },
      
    };


export const VentaStructure = (sale: VentaEntityDtos): TDocumentDefinitions => {

    const docDefinition: TDocumentDefinitions = {
        styles,
        content:  [
            { text: `KIM KOMESTIC`, style: 'title' },
            { text: `R.U.C. 10753296366`, style: 'subtitle' },

            { text: `${sale.type} ELECTRÓNICA`, style: 'header' },
            { text: `F-00${sale.id}`, style: 'subheader' },

            
            { 
                text: `Fecha de emision: ${sale.createdAt}`, style: 'ticketContentClient' 
            },
            { 
                text: `${sale.client.num_doc === '00000000' ? '' : `Cliente: ${sale.client.name}` }`, style: 'ticketContentClient' 
            },

            {
                 text: `${sale.client.num_doc === '00000000' ? '' : `${sale.client.type === 'JURIDICO'? 'RUC': 'DNI'}: ${sale.client.num_doc }`}`, style: 'ticketContentClient' 
            },
            { 
                text: `${sale.client.num_doc === '00000000' ? '' : `Direccion: ${sale.client.address}` }`, style: 'ticketContentClient' 
            },
  
            {
                columns: [
                    { width: '*', text: '' },
                    {
                        width: 'auto',
                        layout:'noBorders',
                        table: {
                          widths: ['*', '*'],
                          body: [
                              [
                                  { text: 'Producto', style: 'ticketContent'}, 
                                  { text: 'Precio (S/.)', style: 'ticketContent'}, 
                              ],
                              ...sale.items.map(
                                  (ventaItem) => 
                                  [
                                      {
                                          text: `${ventaItem.quantity} ${ventaItem.product.name} ${ventaItem.measures.name}`, 
                                          style: 'ticketContent'
                                      },
                                      {
                                          text:  `S/. ${((ventaItem.price + ventaItem.income) * ventaItem.quantity).toFixed(2)}`, 
                                          style: 'ticketContent'
                                      },
                                  ]
                              ),
                          ]
                        },
                        style: 'infoTable'
                    },
                    { width: '*', text: '' },

                ]
            },
            
            {
                columns: [
                    { width: '*', text: '' },
                    {
                        width: 'auto',
                        layout:'noBorders',
                        table: {
                            widths: ['*', '*'],
                            body: [
                                [
                                    { text: '', style: 'ticketContent'}, 
                                    { text: '', style: 'ticketContent'}, 
                                ],
                                
                                [
                                    {
                                        text: 'Sub Total (S/.)',
                                        style: 'ticketContent'
                                    },
        
                                    {
                                        text: `S/. ${(sale.subTotal)}`,
                                        style: 'ticketContent'
                                    }
                                ],
                                [
                                    {
                                        text: 'Intereses (18%)',
                                        style: 'ticketContent'
                                    },
        
                                    {
                                        text: `S/. ${(sale.tax)}`,
                                        style: 'ticketContent'
                                    }
                                ],
                                [
                                    {
                                        text: 'Total (S/.)',
                                        style: 'ticketContent'
                                    },
        
                                    {
                                        text: `S/. ${(sale.total)}`,
                                        style: 'ticketContent'
                                    }
                                ]
                            ]
                        },
                        style: 'infototal'
                      },
                ]
            },
           
        ],
        pageSize: {
            width: 7.5 * 28.35,   // 7.5 cm convertidos a puntos
            height: 'auto'    // 21 cm convertidos a puntos
          },
        pageMargins: [20, 20, 20, 20]
    };
    return docDefinition;
} 