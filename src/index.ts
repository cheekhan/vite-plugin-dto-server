import type { UserConfig, ViteDevServer } from "vite"
import middleWares from "./middleWares"

export default function (opts: defaultOptions) {
    const options: defaultOptions = {
        typePath: opts.typePath || '/types',
        checkDTO: opts.checkDTO || false,
        baseUrl: opts.baseUrl || '/vite-dto-server',
        pathName: opts.pathName
    }
    return {
        name: "@cheekhan/vite-plugin-dto-server",
        config(config: UserConfig) {
            // 如果配置了代理，则拦截不生效
            if (config.server?.proxy) {
                options.pathName = ""
            }
        },
        configureServer(server: ViteDevServer) {
            middleWares(server.middlewares, options);
        }
    }
}







