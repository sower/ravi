<script setup ts>
import { setTitle } from '~/store/projectSetting'

const { t } = useI18n()
setTitle(404)

function back() {
  location.pathname = '/'
}
</script>

<template>
  <button btn @click="back">
    {{ t('not-found') }}
  </button>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
