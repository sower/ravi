<template>
  <n-space vertical align="center" class="settings">
    <n-h1> Settings </n-h1>

    <n-input v-model:value="settingsStr" :autosize="{ minRows: 5, maxRows: 20 }" type="textarea" size="large" />

    <n-space justify="space-around">
      <n-button type="info" @click="dump">
        导出
      </n-button>

      <p></p>

      <n-button type="info" @click="load">
        导入
      </n-button>
    </n-space>
  </n-space>



</template>

<script setup lang="ts">
import { useWebsiteStore } from '@/store/modules/website';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const websiteStore = useWebsiteStore()
const { websites } = storeToRefs(websiteStore)

const settingsStr = ref(JSON.stringify(websites.value, null, 2));

function checkSettings() {

}

function load() {
  try {
    let new_settings = JSON.parse(settingsStr.value);
    websiteStore.setWebsites(new_settings)
    window.$message.info('load success')
  } catch (e) {
    window.$message.console.error('load failure');
    console.log(e);
  }
}

function dump() {
  settingsStr.value = JSON.stringify(websites.value, null, 2)
  window.$message.info('dump success')
}

</script>

<style>
.settings {
  margin: 20px auto;
  max-width: 85%;
}
</style>