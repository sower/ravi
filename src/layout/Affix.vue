<template>
    <n-affix :bottom="120" :trigger-bottom="60" :listen-to="() => containerRef">
        <n-tag>affix</n-tag>
    </n-affix>
</template>


<script setup lang="ts">
import { ref } from 'vue';

const containerRef = ref<HTMLElement | undefined>(undefined)
</script>


<style scoped>
</style>