import type {Connect} from "vite"
// 导入db
import "../db/index"
// 导入所有的handle
import render from "./render"
import handleApi from "./handleApi"
import {
    addRow, putRow, removeRow, listRow, detailRow
} from "./entity"


export default function (app: Connect.Server, opts: defaultOptions) {
    // 渲染首页，和静态文件
    app.use(opts.baseUrl + '/index', render)
    // 业务接口 - 添加实体
    app.use(opts.baseUrl + '/add', addRow)
    // 业务接口 - 删除实体
    app.use(opts.baseUrl + '/remove', removeRow)
    // 业务接口 - 查询所有实体
    app.use(opts.baseUrl + '/list', listRow)
    // 业务接口 - 查询实体的详情
    app.use(opts.baseUrl + '/detail', detailRow)
    // 业务接口 - 修改一个实体
    app.use(opts.baseUrl + '/put', putRow)
    // 未捕获的，都按照mock接口处理
    app.use(opts.baseUrl + '/', handleApi)
}