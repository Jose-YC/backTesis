import path from "path";
import { ContentImage } from "pdfmake/interfaces";


export const LogoStructure = (url: string): ContentImage => {
    const fullPath = path.join(process.cwd(), 'public', 'img', url);
    return {
            image: fullPath,
            alignment: 'center',
            width: 100,
            height: 100,
    };
} 