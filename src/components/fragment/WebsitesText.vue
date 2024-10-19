<script setup lang="ts">
import _ from 'lodash/lang'
import { storeToRefs } from 'pinia'
import type { Site } from '~/store/types'
import { useWebsiteStore } from '~/store/website'

const { t } = useI18n()

const websiteStore = useWebsiteStore()
const { websites } = storeToRefs(websiteStore)

const settingsStr = ref(JSON.stringify(websites.value, null, 2))

function validateString(str: string, name: string, minLength: number, maxLength: number) {
  if (_.isEmpty(str) || str.length < minLength || str.length > maxLength)
    throw new Error(`${name} (${str}) should be ${minLength}-${maxLength} characters`)
}

function checkSettings(websites: object) {
  for (const key of Object.keys(websites)) {
    validateString(key, 'Title name', 1, 10)
    websites[key].forEach((site: Site, index: number) => {
      validateString(site?.name, 'Site name', 1, 20)
      validateString(site?.url, 'Site url', 3, 1000)
      if (site?.shortcut)
        validateString(site.shortcut, 'Site shortcut', 1, 1)
    })
  }
}

function load() {
  try {
    const new_settings = JSON.parse(settingsStr.value)
    checkSettings(new_settings)
    websiteStore.setWebsites(new_settings)
    window.$message.info('load success')
  }
  catch (e) {
    window.$message.error(`load failure: ${e.message}`)
  }
}

function dump() {
  settingsStr.value = JSON.stringify(websites.value, null, 2)
  window.$message.info('dump success')
}
</script>

<template>
  <n-space vertical align="center">
    <n-h2>{{ t('settings.websites') }}</n-h2>
    <n-input
      v-model:value="settingsStr" class="min-w-[50vw]" :autosize="{ minRows: 5, maxRows: 20 }" type="textarea"
      size="large"
    />

    <n-space my-xl justify="space-around">
      <button btn @click="dump">
        {{ t('settings.dump') }}
      </button>

      <p />

      <button btn @click="load">
        {{ t('settings.load') }}
      </button>
    </n-space>
  </n-space>
</template>
