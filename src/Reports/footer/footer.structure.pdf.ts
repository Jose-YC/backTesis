import { Content } from "pdfmake/interfaces";


export const FooterStructure = (currentPage:number, pageCount:number, name: string): Content => {

    return {
        
        columns: [
          { text: '', width: 'auto' },
          {
            width: 'auto',
            text: `Este documento ${name} oficial. Por favor, conserve una copia para sus registros.`,
            alignment: 'left',
            fontSize: 10,
            margin: [50, 7, 0, 0]
          },
          {
            text: `Pagina ${currentPage} de ${pageCount}`,
            alignment: 'right',
            fontSize: 12,
            bold: true,
            margin: [0, 5, 30, 0]
          }
        ]
        
    };
} 