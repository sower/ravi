<script setup lang="ts">
import { darkTheme, dateZhCN, zhCN } from 'naive-ui';
import { language, theme } from '~/store/projectSetting';
import { LangEnum } from './enum/appEnum';

const getLocale = computed(() => (language.value === LangEnum.ZH ? zhCN : null))
const getDateLocale = computed(() => (language.value === LangEnum.ZH ? dateZhCN : null))
const getDarkTheme = computed(() => (theme.value ? darkTheme : undefined))
</script>

<template>
  <n-config-provider :locale="getLocale" :date-locale="getDateLocale" :theme="getDarkTheme">
    <router-view />
  </n-config-provider>
</template>

