import type { Connect } from "vite"
import { readFile } from "fs/promises"

/**
 * 渲染内置前端系统
 */
const handleFunction: Connect.NextHandleFunction = (req, res, next) => {
    res.end(`首页`)
}
export default handleFunction