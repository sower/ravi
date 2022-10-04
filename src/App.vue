<template>
  <n-config-provider :locale="getLocale" :date-locale="getDateLocale" :theme="getDarkTheme">
    <router-view />
  </n-config-provider>
</template>


<script setup lang="ts">
import { darkTheme, dateZhCN, NConfigProvider, zhCN } from 'naive-ui';
import { computed } from 'vue';
import { useProjectSettingStore } from './store/modules/projectSetting';

const settingStore = useProjectSettingStore()

const getLocale = computed(() => (settingStore.language === 'zh' ? zhCN : null));
const getDateLocale = computed(() => (settingStore.language === 'zh' ? dateZhCN : null));
const getDarkTheme = computed(() => (settingStore.theme ? darkTheme : undefined));


</script>

<style scoped>
.bg {
  background-image: url("./src/assets/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  opacity: 0.5;
}
</style>
