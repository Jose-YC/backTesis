import path from "path";
import { ContentImage } from "pdfmake/interfaces";


export const LogoStructure = (url: string): ContentImage => {
    const publicPath = path.join(__dirname, 'public');
    const filePath = path.join(publicPath, '/img/', url);
    return {
            image: filePath,
            alignment: 'center',
            width: 100,
            height: 100,
    };
} 