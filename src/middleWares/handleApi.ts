import type { Connect } from "vite"
/**
 * 查找对应接口生成的相应
 */


const handleFunction: Connect.NextHandleFunction = (req, res, next) => {
    res.end('mock接口相应')
}

export default handleFunction