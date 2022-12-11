<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useWebsiteStore } from '~/store/website';

const websiteStore = useWebsiteStore()
const { websites } = storeToRefs(websiteStore)

const settingsStr = ref(JSON.stringify(websites.value, null, 2))

function checkSettings() {

}

function load() {
  try {
    const new_settings = JSON.parse(settingsStr.value)
    websiteStore.setWebsites(new_settings)
    window.$message.info('load success')
  }
  catch (e) {
    window.$message.console.error('load failure')
    console.log(e)
  }
}

function dump() {
  settingsStr.value = JSON.stringify(websites.value, null, 2)
  window.$message.info('dump success')
}
</script>

<template>
  <n-space vertical align="center" class="settings">
    <n-space justify="space-evenly" text-4xl my-xl>
      <div class="i-carbon-settings" />
      <div>Settings</div>
    </n-space>

    <n-input v-model:value="settingsStr" :autosize="{ minRows: 5, maxRows: 20 }" type="textarea" size="large" />

    <n-space my-xl justify="space-around">
      <button btn @click="dump">
        导出
      </button>

      <p />

      <button btn @click="load">
        导入
      </button>
    </n-space>
  </n-space>
</template>

<style>
.settings {
  margin: 20px auto;
  max-width: 85%;
}
</style>
