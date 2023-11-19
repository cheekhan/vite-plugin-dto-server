<script setup lang="ts">
import { ref } from "vue"
import { ElTabs, ElTabPane, ElScrollbar } from "element-plus"
import IndexVue from "./views/index.vue";

// 当前活动的tab
const activeName = ref("entity")

</script>

<template>
    <div class="app-container">
        <ElTabs type="card" v-model="activeName">
            <ElTabPane label="entity" name="entity" />
            <!-- <ElTabPane label="dto" name="dto" /> -->
            <ElTabPane label="api" name="api" />
        </ElTabs>
        <div class="tab-view">
            <ElScrollbar height="100%">
                <IndexVue :tab-name="activeName" />
            </ElScrollbar>
        </div>
    </div>
</template>

<style scoped>
.app-container {
    width: 100vw;
    height: 100vh;
}

.tab-view {
    height: var(--main-height);
}
</style>
