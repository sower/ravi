<script lang="ts" setup>
import { darkTheme } from 'naive-ui';
import { theme } from '~/store/projectSetting';
const getDarkTheme = computed(() => (theme.value ? darkTheme : undefined))
</script>

<template>
  <n-config-provider :theme="getDarkTheme">
    <n-card>
      <n-el tag="div">
        <slot />
      </n-el>
    </n-card>
  </n-config-provider>
</template>
