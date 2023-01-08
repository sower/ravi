<template>
  <Secondary>
    <div class="my-[24vh]" h-screen>
      <n-result status="404" size="large" title="404 资源不存在" description="生活总归带点荒谬">
        <template #footer>
          <router-view />
        </template>
      </n-result>
    </div>
  </Secondary>
</template>
