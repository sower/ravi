<script setup lang="ts">
const containerRef = ref<HTMLElement | undefined>(undefined)
</script>

<template>
  <n-affix :bottom="120" :trigger-bottom="60" :listen-to="() => containerRef">
    <n-tag>affix</n-tag>
  </n-affix>
</template>

<style scoped>

</style>
