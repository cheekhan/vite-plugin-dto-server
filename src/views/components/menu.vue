<script setup lang="ts">
import { ElInput } from "element-plus"
import { ref, computed } from "vue";
// 定义搜索的内容
const searchText = ref("")
// 搜索出来的列表,根据搜索内容和数据源进行计算得到的
const searchItems = computed(() => props.tableData.filter(item => item.name?.includes(searchText.value)))
// 自定义选择事件
const emits = defineEmits<{
    (e: 'select', data: entityTypes): void
}>()
const props = defineProps<{
    tableData: Array<entityTypes & apiTypes>
}>()
// 处理记录的点击事件
function handleSelect(item: entityTypes & apiTypes) {
    emits('select', item)
}
</script>

<template>
    <div class="layout-menu-container">
        <ElInput v-model="searchText" placeholder="搜索内容" class="search-text" />
        <div v-for="(item, index) of searchItems" :key="index" class="search-item" @click="handleSelect(item)">{{ item.name
        }}
        </div>
    </div>
</template>

<style scoped>
.layout-menu-container {
    position: relative;
    box-sizing: border-box;
    padding: 5px;
    padding-top: 42px;
}

.search-text {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 300px;
}

.search-item {
    margin-bottom: 5px;
    transition: all .5s;
    border-radius: 5px;
    color: rgba(60, 60, 67, 0.92);
    padding: 5px;
    cursor: pointer;
    /* text-align: center; */
    box-sizing: border-box;
    padding-left: 10px;
}

.search-item:hover {
    background-color: #f6f6f7;
    /* color: #476582; */
    color: #646cff;
}

.search-item-active {
    background-color: #f6f6f7;
    color: #646cff;
}
</style>