<script setup lang="ts">
import { setTitle } from '~/store/projectSetting';
const { t } = useI18n()
setTitle(t('header.search-mode'))
</script>

<template>
  <div class="max-w-[90%] mx-auto my-10vh">
    <MultiTabSearch />
    <n-divider py-xl title-placement="center">
      <div text-sm class="i-carbon:ibm-cloud-pak-integration" />
    </n-divider>
    <DropdownApp />
  </div>
</template>
