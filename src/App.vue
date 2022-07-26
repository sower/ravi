<script setup lang="ts">
import Main from './components/Main.vue'
import { darkTheme } from 'naive-ui'
import { NConfigProvider } from 'naive-ui'
import { zhCN, dateZhCN } from 'naive-ui'
</script>

<template>
  <n-config-provider :theme="darkTheme" :locale="zhCN" :date-locale="dateZhCN">
    <Main />
  </n-config-provider>
</template>

<style>
</style>
