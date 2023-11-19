# 接口和实体类管理插件

## 一、概述

在实际开发中，经常会因为种种原因导致无法部署一个功能完整的API管理平台（如yapi等）

或者因为某些原因，无法使用apifox、postman等工具（电脑资源问题、账号无法登录问题、或出于保密）

也可能后端代码里注释过少，导致swagger等组件起到的效果微乎其微

为了解决以上问题，以及为了前端架构的完整性（虽然都说前端架构师都是目录工程师，但是为了B格～你懂的）

所以有了这样的一样方法，就是开发一款插件，这个插件能够在vite测试服务实例的基础上，
增加接口管理功能，并且能够对后端所有的DTO进行管理（可能某些后端工程里对DTO、entity、VO等概念区分的不明显，
这里的DTO单纯的指和前端约定好的每一种结构）。

## 二、

### 1、基础功能实现

- [ ] DTO和API的录入
- [ ] 根据DTO，生成全局的声明文件

### 2、校验功能

- [ ] 拦截请求，并且根据录入的API，自动mock响应
- [ ] 自动校验前端请求入参

### 3、高级功能

- [ ] 根据录入的接口相应结构，生成接口请求模块
- [ ] 并且在接口请求模块，自动完成相应数据的校验，和清洗
