import express, { Router } from 'express';
import cors  from 'cors';
import fileUpload from 'express-fileupload';
import path from 'path';

interface Options {
    port: number,
    routes: Router,
    publicPath?: string,
}

export class Server {

    private app = express();
    private readonly port: number;
    private readonly routes: Router;
    private readonly publicPath: string;

    constructor(option:Options){
        const {port, routes , publicPath='public'} = option;
        this.port=port;
        this.routes=routes;
        this.publicPath=publicPath;
    }

     async start(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:true}));
        this.app.use(express.static(path.join(__dirname, this.publicPath)));
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/'
        }));
        this.app.use(this.routes);

        this.app.listen(this.port, ()=>{
            console.log("corriendooooooooooooo")
        })
    
    }
}