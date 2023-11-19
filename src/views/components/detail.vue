<script setup lang="ts">
import { ref, Ref, computed, watchEffect } from "vue"
import {
    ElButton, ElForm, ElFormItem, ElInput,
    ElSelect, ElOption
} from "element-plus"
import { BottomRight, Delete } from "@element-plus/icons-vue"
// 传入props
const props = defineProps<{
    tabName: string,
    form: Object
}>()
// 事件
// const emits = defineEmits<{
//     (e: 'add', id: number): void
// }>()

const isEdit = ref(false); // 是否编辑模式，编辑模式下表单可改，默认false
// 表单，设为联合类型
const form: Ref<entityTypes & apiTypes> = ref({});
// 进行依赖收集，把props和form进行关联
watchEffect(() => form.value = props.form);
// 是否为api页面，使用计算属性，便于页面调用
const isApi = computed(() => props.tabName == 'api')

// 重置表单
function reset() {
    form.value = {}
}
// 切换到编辑模式
function switchEdit() {
    isEdit.value = true
}
// 改变模式为添加模式
function switchAdd() {
    reset();
    isEdit.value = true
}


</script>

<template>
    <div class="item-detail-container">
        <!-- 操作按钮区 -->
        <div class="flex-right" style="margin-bottom: 5px;">
            <ElButton type="primary" @click="switchEdit">编辑</ElButton>
            <ElButton type="primary" @click="switchAdd">添加</ElButton>
            <ElButton type="primary" :disabled="!isEdit">删除</ElButton>
            <ElButton type="primary" :disabled="!isEdit">提交</ElButton>
        </div>
        <!-- 表单区域 -->
        <ElForm :disabled="!isEdit">
            <!-- 说明性的字段 -->
            <ElFormItem>
                <ElInput style="width: 250px;margin-right: 20px;" v-model="form.name" :disabled="!!form.name" />
                <ElInput style="width: 100px;margin-right: 20px;" v-model="form.method" v-if="isApi" />
                <ElInput style="width: 300px;" v-model="form.desc" />
            </ElFormItem>
            <!-- API模块时 -->
            <template v-if="isApi">
                <!-- 显示入参 -->
                <ElFormItem label="入参" />
                <ElFormItem v-for="(item, index) of form.req" :key="index">
                    <ElInput style="width: 150px;" v-model="item.name" />
                    <ElInput style="width: 150px;margin: 0 20px;" v-model="item.type" />
                    <ElInput style="width: 350px;margin-right:10px;" v-model="item.desc" />
                    <ElButton circle :icon="BottomRight" type="primary" />
                    <ElButton circle :icon="Delete" type="danger" />
                </ElFormItem>
                <!-- 出参 -->
                <ElFormItem label="出参" />
                <ElFormItem v-for="(item, index) of form.res" :key="index">
                    <ElInput style="width: 150px;" v-model="item.name" />
                    <ElInput style="width: 150px;margin: 0 20px;" v-model="item.type" />
                    <ElInput style="width: 350px;margin-right:10px;" v-model="item.desc" />
                    <ElButton circle :icon="BottomRight" type="primary" />
                    <ElButton circle :icon="Delete" type="danger" />
                </ElFormItem>
            </template>
            <!-- 录入实体信息时 -->
            <template>
                <ElFormItem v-for="(item, index) of form.item" :key="index">
                    <ElInput style="width: 150px;" v-model="item.name" />
                    <ElInput style="width: 150px;margin: 0 20px;" v-model="item.type" />
                    <ElInput style="width: 350px;margin-right:10px;" v-model="item.desc" />
                    <ElButton circle :icon="BottomRight" type="primary" />
                    <ElButton circle :icon="Delete" type="danger" v-if="isEdit" />
                </ElFormItem>
            </template>
            <!-- 添加一列的按钮 -->
            <ElFormItem label="选择属性类型：">
                <ElSelect>
                    <ElOption label="string" value="string" />
                    <ElOption label="number" value="number" />
                    <ElOption label="boolean" value="boolean" />
                    <ElOption label="array" value="array" />
                    <ElOption label="dict" value="dict" />
                </ElSelect>
                <ElButton type="primary" style="margin-left: 10px;">添加一列</ElButton>
            </ElFormItem>
            <!-- 提交：使用文档型数据库 -->
            <ElFormItem>
                <ElButton type="primary">提交</ElButton>
                <ElButton>取消</ElButton>
            </ElFormItem>
        </ElForm>
    </div>
</template>

<style scoped>
.item-detail-container {
    box-sizing: border-box;
    padding: 5px;
}
</style>