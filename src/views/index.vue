<script setup lang="ts">
import SearchMenu from "./components/menu.vue"
import Detail from "./components/detail.vue"
import { ref, watchEffect, watch } from "vue"
import { useTabConfig } from "./index"

const props = defineProps<{
    tabName: string
}>()
// 列表数据，是根据props变动，而实时请求的
const tableData = ref<entityTypes[]>([]);
watchEffect(() => {
    tableData.value = useTabConfig(props.tabName).value
})
// 选择了数据传递给detail组件
const detailForm = ref({})
function handleSelect(item: entityTypes & apiTypes) {
    detailForm.value = item;
    keyId.value += 1
}

// 变化keyID，刷新组件
const keyId = ref(1);
watch(
    () => props.tabName,
    () => keyId.value += 1
)

</script>

<template>
    <div class="view-container">
        <SearchMenu style="width: 310px;" :table-data="tableData" @select="handleSelect" />
        <Detail style="flex-grow: 1;" :tab-name="props.tabName" :form="detailForm" :key="keyId" />
    </div>
</template>

<style scoped>
.view-container {
    display: flex;
}
</style>