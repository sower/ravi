<script setup lang="ts">
import { darkTheme, dateZhCN, zhCN } from 'naive-ui';
import { useProjectSettingStore } from '~/store/projectSetting';

const settingStore = useProjectSettingStore()

const getLocale = computed(() => (settingStore.language === 'zh' ? zhCN : null))
const getDateLocale = computed(() => (settingStore.language === 'zh' ? dateZhCN : null))
const getDarkTheme = computed(() => (settingStore.theme ? darkTheme : undefined))
</script>

<template>
  <n-config-provider :locale="getLocale" :date-locale="getDateLocale" :theme="getDarkTheme">
    <router-view />
  </n-config-provider>
</template>

<style scoped>
.bg {
  /* background-image: url("./src/assets/bg.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  opacity: 0.5;
}
</style>
