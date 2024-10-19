<script setup lang="ts">
import { useThemeVars } from 'naive-ui'
import { bgImage } from '~/store/projectSetting'

const themeVars = useThemeVars()
const themeBodyColor = computed(() => themeVars.value.bodyColor)
const bgImageUrl = computed(() => bgImage.value.isShow ? `url("${bgImage.value.url}")` : 'none')
const bodyColor = computed(() => bgImage.value.isShow ? 'transparent' : themeBodyColor.value)
const inputColor = computed(() => bgImage.value.isShow ? 'transparent' : themeVars.value.inputColor)
</script>

<template>
  <div>
    <n-layout :native-scrollbar="false">
      <Header />
      <n-layout-content>
        <RouterView />
      </n-layout-content>
      <Footer />
    </n-layout>
  </div>
</template>

<style scoped>
:deep(.n-layout-header),
:deep(.n-layout) {
  background-color: v-bind('bodyColor');
}

:deep(.n-input) {
  background-color: v-bind('inputColor');
}

:deep(.n-layout::after) {
  background-color: v-bind('themeBodyColor');
  background-image: v-bind('bgImageUrl');
  opacity: v-bind('bgImage.opacity');
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}
</style>
