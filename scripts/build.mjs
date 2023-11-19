import { build } from "vite"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"
import vue from "@vitejs/plugin-vue"


const __dirname = dirname(fileURLToPath(import.meta.url));
const basePath = resolve(__dirname, '../');

/**
 * 库模式构建，将中间件，和构建好的页面，整个到一起
 */
async function buildLib() {
    return await build({
        root: basePath,
        build: {
            outDir: 'dist',
            lib: {
                entry: resolve(basePath, './src/index.ts'),
                formats: ['es'],
                fileName: 'index'
            }
        }
    })
}
/**
 * 构建当前工程的网页，需要优先构建，构建完成后，在库构建时会使用到
 */
async function buildFront() {
    console.log('构建前端页面')
    return await build({
        root: basePath,
        build: {
            outDir: 'dist/static'
        },
        plugins: [
            vue()
        ]
    })

}

async function start() {
    await buildLib();
    await buildFront();
}


start()