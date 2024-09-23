import { AppRoutes, Server } from "./Server";
import { envs } from "./config/plugins/envs.plugin";

const main = async() => {
    const server = new Server({
        port: envs.PORT,
        routes: AppRoutes.routes,
    });

    server.start();
}

(() => {
    main();
})()
