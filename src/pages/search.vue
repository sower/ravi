<script setup lang="ts">
import { setTitle } from '~/store/projectSetting'

const { t } = useI18n()
setTitle(t('header.search-mode'))
</script>

<template>
  <div class="mx-auto my-[calc((100vh-32rem)/2)] max-w-[90%]">
    <MultiTabSearch />
    <n-divider py-xl title-placement="center">
      <div text-sm class="i-carbon:ibm-cloud-pak-integration" />
    </n-divider>
    <DropdownApp />
  </div>
</template>
