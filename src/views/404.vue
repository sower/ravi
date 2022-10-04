<template>
    <div class="result">
        <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
            <template #footer>
                <n-button @click="back">找点乐子吧</n-button>
            </template>
        </n-result>

    </div>
</template>

<script lang="ts" setup>
function back() {
    location.pathname = '/'
}
</script>

<style scoped>
.result {
    margin: 35px auto;
}
</style>