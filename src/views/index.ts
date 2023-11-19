import { ref, Ref } from "vue"

const tableData: Ref<Array<entityTypes & apiTypes>> = ref([])
/**
 * 获取列表
 * @param tabName 
 * @returns 
 */
export function useTabConfig(tabName: string): Ref<Array<entityTypes & apiTypes>> {
    tableData.value = new Array<entityTypes & apiTypes>(10).fill({
        type: "api",
        name: "实体名或api地址",
        desc: "描述信息，接口是说明",
        method: "POST",
        item: [
            { type: "string", name: 'code', desc: "全局响应码", chilren: [] }
        ],
        req: [{ type: "string", name: 'code', desc: "全局响应码", chilren: [] }],
        res: [{ type: "string", name: 'code', desc: "全局响应码", chilren: [] }]

    });
    switch (tabName) {
        case "entity":
            break;
        case "dto":
            break;
        case "api":
            break;
    }
    return tableData
}

/**
 * 获取详情
 * @param tabName 
 * @param item 
 * @returns 
 */
export function useDetail(tabName: string, item: any): Ref<any[]> {
    return ref([])
}