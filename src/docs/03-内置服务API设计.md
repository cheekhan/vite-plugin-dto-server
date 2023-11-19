> 所有的请求，都是POST方法。请求的前缀，默认是/vite-dto-server，但这个参数是可配的

### 0、记录实体结构

```ts
interface allProp {
    type?: "entity" | 'api';
    name?: string;
    desc?: string;
    method?: string;
    res?: propsItemTypes[];
    req?: propsItemTypes[];
    item?: propsItemTypes[];
}
```

### 1、插入记录

| 请求地址 | 参数   |
|------|------|
| add  | 实体信息 |

### 2、修改记录

| 请求地址 | 参数   |
|------|------|
| put  | 实体信息 |

### 3、删除记录

| 请求地址   | 参数   |
|--------|------|
| remove | 实体信息 |

### 4、查询所有记录

｜请求地址｜参数｜
｜----｜----｜
｜list｜通过`type`字段说明要查询的是`api`，还是`entity`｜

### 5、查询某个记录的详情

｜请求地址｜参数｜
｜----｜----｜
｜detail｜通过`name`和`type`来定位，可以传入其他的冗余字段｜

### 4、mock接口

如果都未捕获到的接口，就默认按照是mock接口处理。

自动去api信息里寻找对应的结果，然后返回。
