import { ServerResponse } from "http"
import { IncomingMessage } from "connect"

/**
 * 返回统一的响应格式
 * @param res 
 * @param body 
 */
export function handleResponse(res: ServerResponse<IncomingMessage>, body: any) {
    setHeader(res)
    res.end(
        JSON.stringify({
            code: 200,
            msg: "操作成功",
            body
        })
    )
}


/**
 * 处理请求，会判断请求的方法，和转换请求体
 * @param req 
 * @param res 
 */
export function handleRequest(req: IncomingMessage, res: ServerResponse<IncomingMessage>): Promise<any> {
    if (req.method == 'POST') {
        return new Promise((resolve, reject) => {
            let data = Buffer.alloc(0);
            // 拼接请求体
            req.on('data', (chunk: any) => {
                data = Buffer.concat([chunk])
            })
            // 流结束时，格式转换
            req.on('end', () => {
                if (data.length) {
                    resolve(
                        JSON.parse(data.toString('utf8'))
                    )
                } else {
                    resolve({})
                }
            })
            // 异常时，reject
            req.on('error', () => {
                reject('请求体获取失败');
            })
        })
    } else {
        handleErr(res, "只支持post接口")
        return Promise.reject()
    }
}

/**
 * 处理错误的情况
 * 
 * @param res 
 * @param msg 
 */
export function handleErr(res: ServerResponse<IncomingMessage>, msg: string): void {
    setHeader(res)
    res.end(
        JSON.stringify({
            code: 500,
            msg,
        })
    )
}

/**
 * 给所有的相应，都设置响应头
 * @param res 
 */
export function setHeader(res: ServerResponse<IncomingMessage>) {
    res.setHeader('Content-Type', 'application/json; charset=utf-8')
}
