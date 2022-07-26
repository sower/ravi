<script setup lang="ts">

</script>

<template>
  <n-layout has-sider>
    <n-layout-sider collapsed show-trigger content-style="padding: 24px;">海淀桥</n-layout-sider>
    <n-layout>
      <n-layout-header>
        header
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;">Contents</n-layout-content>
      <n-layout-footer>Footer</n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
