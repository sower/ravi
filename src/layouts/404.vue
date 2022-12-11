<script lang="ts" setup>
function back() {
  location.pathname = '/'
}
</script>

<template>
  <div my-35px mx-auto>
    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
      <template #footer>
        <router-view />
      </template>
    </n-result>
  </div>
</template>
