interface defaultOptions {
    typePath: string; // 生成全局声明文件的地址
    checkDTO: boolean; // 是否对请求的入参，进行校验，需要符合DTO
    baseUrl: string; // 默认的请求前缀，用于区分业务接口，默认是  vite-dto-server
    pathName?: string; // 拦截的接口前缀，如果为空，不拦截
}

// 属性的结构
interface propsItemTypes {
    type: 'string' | "number" | 'boolean' | 'array' | "map";
    name: string;
    desc: string;
    children: propsItemTypes[]
}

// 实体结构
interface entityTypes {
    type?: "entity" | 'api';
    name?: string;
    desc?: string;
    item?: propsItemTypes[]
}

// api结构
interface apiTypes {
    type?: "entity" | 'api';
    name?: string;
    desc?: string;
    method?: string;
    res?: propsItemTypes[];
    req?: propsItemTypes[];
}