<script setup lang="ts">
import { bgImage } from '~/store/projectSetting';

const { t } = useI18n()

const imageUrl = ref(bgImage.value.url)
function updateUrl() {
  bgImage.value.url = imageUrl.value
  window.$message.info('ok')
}
</script>

<template>
  <n-space vertical align="center">
    <n-space justify="space-evenly" text-xl my-sm>
      <div text-2xl class="i-carbon-image" />
      <div>{{ t('settings.background-image') }}</div>
    </n-space>

    <n-form :model="bgImage" label-placement="left" label-width="auto" w-xs>
      <n-form-item :label="t('settings.show')" path="isShow">
        <n-switch v-model:value="bgImage.isShow" />
      </n-form-item>
      <n-form-item :label="t('settings.url')" path="url">
        <n-input v-model:value="imageUrl" :on-blur="updateUrl" placeholder="Image url or base64" />
      </n-form-item>
      <n-form-item :label="t('settings.opacity')" path="opacity">
        <n-slider v-model:value="bgImage.opacity" :max="1" :step="0.01" />
      </n-form-item>
    </n-form>
  </n-space>
</template>
