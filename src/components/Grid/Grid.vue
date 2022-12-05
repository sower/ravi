<template>
  <n-grid item-responsive :x-gap="35" :y-gap="35" cols="1 800:2 1200:3">
    <n-grid-item v-for="group in websites" class="mx-auto">
      <square :group="group" />
    </n-grid-item>
  </n-grid>
  <n-dropdown placement="bottom-start" trigger="manual" :x="positionX" :y="positionY" :options="dropdownOptions"
    :show="editable" :on-clickoutside="onClickoutside" @select="handleSelect" />
  <modal />
</template>

<script setup lang="ts">
import Square from '@/components/Grid/Square.vue';
import Modal from '@/components/ModalContent/Modal.vue';
import { useWebsiteStore } from '@/store/modules/website';
import { storeToRefs } from 'pinia';
import { provide, ref } from 'vue';

const websiteStore = useWebsiteStore()

const { websites } = storeToRefs(websiteStore)

const dropdownOptions = [
  {
    label: '编辑',
    key: 'edit'
  }
]

const editable = ref(false)
const positionX = ref(0)
const positionY = ref(0)

provide('editable', editable)
provide('positionX', positionX)
provide('positionY', positionY)
function handleSelect(key: string | number) {
  editable.value = false
  websiteStore.setShowModal(true)
}

function onClickoutside() {
  editable.value = false
  window.$message.info('clickoutside')
}


</script>