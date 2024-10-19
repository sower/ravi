<script setup lang="ts">
import { setTitle } from '~/store/projectSetting'

const { t } = useI18n()
setTitle(t('header.setting'))
</script>

<template>
  <n-space vertical align="center" class="settings">
    <n-space justify="space-evenly" my-xl text-4xl>
      <div class="i-carbon-settings" />
      <div>{{ t('header.setting') }}</div>
    </n-space>

    <bg-image />

    <n-divider class="w-xs" title-placement="center">
      <div text-sm class="i-carbon:split-screen" />
    </n-divider>

    <websites-text />
  </n-space>
</template>

<style>
.settings {
  margin: 20px auto;
  max-width: 85%;
}
</style>
