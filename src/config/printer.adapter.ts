import PdfPrinter from 'pdfmake'
import { BufferOptions, CustomTableLayout, TDocumentDefinitions } from 'pdfmake/interfaces';
import path from 'path';


const fonts = {
    Roboto: {
        normal: path.join(__dirname, '..', '/..', '/fonts/Roboto-Regular.ttf'),
        bold: path.join(__dirname, '..', '/..', '/fonts/Roboto-Medium.ttf'),
        italics: path.join(__dirname, '..', '/..', '/fonts/Roboto-Italic.ttf'),
        bolditalics: path.join(__dirname, '..', '/..', '/fonts/Roboto-MediumItalic.ttf')
    }
};
const customTableLayouts: Record<string, CustomTableLayout> = {
   customLayoutDark: { 
    hLineWidth: function (i, node) {
        if (i === 0 || i === node.table.body.length) {
          return 0;
        }
        return (i === node.table.headerRows) ? 2 : 1;
      },
      vLineWidth: function (i) {
        return 0;
      },
      hLineColor: function (i) {
        return i === 1 ? 'black' : '#aaa';
      },
      paddingLeft: function (i) {
        return i === 0 ? 0 : 8;
      },
      paddingRight: function (i, node) {
        return (i === node.table.widths!.length - 1) ? 0 : 8;
      },
    fillColor: function(i) {
        if (i === 0) {
            return '#333333'
        }
        return i % 2 === 0 ? '#f9f9f9' : '#f3f3f3'
    },
  },
}


export class PDFPrinter {
    private printer = new PdfPrinter(fonts);

    generated(pdfDoc: TDocumentDefinitions, options: BufferOptions = { tableLayouts: customTableLayouts } ):PDFKit.PDFDocument{
        console.log(fonts)
        return this.printer.createPdfKitDocument(pdfDoc, options)
    }
  
}