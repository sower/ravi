<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import type { PropType } from 'vue'
import { inject, nextTick, ref } from 'vue'
import type { Site } from '~/store/types'
import { useWebsiteStore } from '~/store/website'
import { openUrl } from '~/utils/common'

const props = defineProps({
  title: String,
  sites: {
    type: Object as PropType<Array<Site>>,
    required: true,
  },
  callback: Function as PropType<(id: number) => void>,
})

const websiteStore = useWebsiteStore()

// 存储与展示分离
const titleName = ref(props.title)

const inputStatus = ref('success')
const showInput = ref(false)

function openInput(e: MouseEvent) {
  e.preventDefault()
  showInput.value = true
}

function saveTitle() {
  if (titleName.value?.trim().length === 0) {
    inputStatus.value = 'error'
    window.$message.warning('The input cannot be blank')
    return
  }
  inputStatus.value = 'success'
  showInput.value = false
  websiteStore.setTitle(props.title, titleName.value)
  window.$message.success('Save successfully')
}

// 失焦即保存
const target = ref(null)
onClickOutside(target, event => saveTitle())

const showContext = inject<boolean>('showContext')
const positionX = inject<number>('positionX')
const positionY = inject<number>('positionY')

function handleContextMenu(site: Site, event: MouseEvent) {
  event.preventDefault()
  showContext.value = false
  nextTick().then(() => {
    showContext.value = true
    positionX.value = event.clientX
    positionY.value = event.clientY
    websiteStore.setCurrentSite(site)
  })
}
</script>

<template>
  <n-h4 prefix="bar" class="ml-1 max-w-[90%]" @click="openInput">
    <n-input v-if="showInput" ref="target" v-model:value="titleName" type="text" :status="inputStatus" maxlength="10"
      minlength="1" autofocus clearable />
    <n-text v-else strong>
      {{ titleName }}
    </n-text>
  </n-h4>
  <n-grid :x-gap="8" :y-gap="8" :cols="3" class="max-w-[400px]">
    <n-grid-item v-for="(site, index) in sites" :key="site.id"
      @contextmenu="handleContextMenu({ ...site, index, group: title }, $event)">
      <div class="square" @click="openUrl(site.url)">
        <n-ellipsis max-w-sm>
          {{ site.name }}
        </n-ellipsis>
      </div>
    </n-grid-item>
  </n-grid>
</template>

<style scoped>
.square {
  position: relative;
  display: block;
  padding: 5px;
  margin: auto;
  width: 7em;
  min-height: 2em;
  line-height: 2.4;
  text-align: center;
  font-weight: normal;
  font-size: 1em;
  border-radius: 5px;
  color: white;
  background: rgba(0, 0, 0, 0.35);
  cursor: pointer;
}

.square:hover {
  font-size: 1em;
  font-weight: bolder;
}

.edit {
  position: absolute;
  top: 0;
  right: 0;
  width: 25px;
  height: 10px;
}
</style>
