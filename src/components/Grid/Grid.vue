<script setup lang="ts">
import { useActiveElement, useMagicKeys, whenever } from '@vueuse/core';
import { storeToRefs } from 'pinia';
import { useWebsiteStore } from '~/store/website';
import { openUrl } from '~/utils/common';

const websiteStore = useWebsiteStore()

const { websites, showModal, getHotKeys: hotKeys } = storeToRefs(websiteStore)

const dropdownOptions = [
  {
    label: 'Edit',
    key: 'edit',
  },
]

const showContext = ref(false)
const positionX = ref(0)
const positionY = ref(0)

provide('showContext', showContext)
provide('positionX', positionX)
provide('positionY', positionY)
function handleSelect(key: string | number) {
  showContext.value = false
  websiteStore.setShowModal(true)
}

function onClickoutside() {
  showContext.value = false
}

// 全局快捷键
const activeElement = useActiveElement()
const notUsingInput = computed(() =>
  activeElement.value?.tagName !== 'INPUT'
  && activeElement.value?.tagName !== 'TEXTAREA',
)

const { current } = useMagicKeys()

whenever(current, () => {
  if (!notUsingInput.value || showContext.value || showModal.value)
    return

  const keys = [...current.keys()].map(key => key.toUpperCase())
  for (const key of keys) {
    if (hotKeys.value[key])
      openUrl(hotKeys.value[key].url)
  }
  current.clear()
})
</script>

<template>
  <n-grid item-responsive :x-gap="35" :y-gap="35" cols="1 800:2 1200:3">
    <n-grid-item v-for="(sites, title, index) in websites" :key="index" class="mx-auto">
      <Square :sites="sites" :title="title" />
    </n-grid-item>
  </n-grid>
  <n-dropdown placement="bottom-start" trigger="manual" :x="positionX" :y="positionY" :options="dropdownOptions"
    :show="showContext" :on-clickoutside="onClickoutside" @select="handleSelect" />
  <Modal />
</template>
