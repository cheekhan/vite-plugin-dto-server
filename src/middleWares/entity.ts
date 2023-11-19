import {handleRequest, handleErr, handleResponse} from "../utils/request"
import db from "../db/index"
import {Connect} from "vite"
// 不区分存入的是api还是实体信息，因为不对提交内容做判断
type requestBody = entityTypes & apiTypes

// 添加记录
export const addRow: Connect.NextHandleFunction = async (req, res) => {
    const body: requestBody = await handleRequest(req, res);
    db.insert(body, (e, doc) => e ? handleErr(res, '数据库插入错误') : handleResponse(res, doc))
}

// 修改记录
export const putRow: Connect.NextHandleFunction = async (req, res) => {
    const body: requestBody = await handleRequest(req, res);
    db.update({type: body.type, name: body.name}, body, (e: any, num: number) => {
        if (e) {
            handleErr(res, '数据库删除错误')
        } else if (num) {
            handleResponse(res, body)
        } else {
            handleErr(res, '未找到要修改的的数据')
        }
    })
}

// 删除记录
export const removeRow: Connect.NextHandleFunction = async (req, res) => {
    const body: requestBody = await handleRequest(req, res);
    db.remove(body, {}, (e: any, num: number) => {
        if (e) {
            handleErr(res, '数据库删除错误')
        } else if (num) {
            handleResponse(res, body)
        } else {
            handleErr(res, '未找到删除的数据')
        }
    })
}
// 查询所有记录
export const listRow: Connect.NextHandleFunction = async (req, res) => {
    await handleRequest(req, res)
    db.find({}, {}, (e, doc) => {
        e ? handleErr(res, '数据库查询错误') : handleResponse(res, doc)
    })
}

// 查询记录详情
export const detailRow: Connect.NextHandleFunction = async (req, res) => {
    const body: requestBody = await handleRequest(req, res);
    db.find(body, {}, (e, doc) => {
        e ? handleErr(res, '数据库查询错误') : handleResponse(res, doc)
    })
}