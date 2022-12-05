<template>
  <n-h4 prefix="bar" class="ml-1 max-w-[90%]" @click="openInput">
    <n-input v-model:value="groupTitle" type="text" :status="inputStatus" maxlength="10" minlength="1" autofocus
      @blur="saveTitle" clearable v-if="showInput" />
    <n-text strong v-else>
      {{ group.title }}
    </n-text>
  </n-h4>
  <n-grid :x-gap="8" :y-gap="8" :cols="3" style="max-width: 400px">
    <n-grid-item v-for="site in group.sites" @contextmenu="handleContextMenu(site, $event)">
      <div class="square" @click="openUrl(site.url)">
        <n-ellipsis style="max-width: 6em">
          {{ site.name }}
        </n-ellipsis>

      </div>
    </n-grid-item>
  </n-grid>


</template>


<script setup lang="ts">
import { useWebsiteStore } from '@/store/modules/website';
import { inject, nextTick, PropType, ref } from 'vue';

interface Site {
  id: number;
  name: string;
  url: string;
  shortcut: string;
  [key: string]: any;
}

interface Group {
  id: number;
  title: string;
  sites: Array<Site>;
}

const props = defineProps({
  group: {
    type: Object as PropType<Group>,
    required: true
  },
  callback: Function as PropType<(id: number) => void>
})

function openUrl(url: string) {
  window.open(url)
}

const websiteStore = useWebsiteStore()

let groupTitle = ref(props.group.title)
let inputStatus = ref('success')
const showInput = ref(false)

function openInput(e: MouseEvent) {
  e.preventDefault()
  showInput.value = true
  // groupTitle.value =props.group.title
}

function openSites(e: MouseEvent) {
  e.preventDefault()
  props.group.sites.forEach(site => openUrl(site.url))
}

function saveTitle() {
  if (groupTitle.value.trim().length === 0) {
    inputStatus.value = 'error'
    window.$message.warning('The input cannot be blank');
    return
  }
  showInput.value = false
  websiteStore.setTitle(props.group.id, groupTitle.value)
}

let editable = inject<boolean>('editable')
let positionX = inject<number>('positionX')
let positionY = inject<number>('positionY')

function handleContextMenu(site: Site, event: MouseEvent) {
  event.preventDefault()
  editable.value = false
  nextTick().then(() => {
    editable.value = true
    positionX.value = event.clientX
    positionY.value = event.clientY
    websiteStore.setCurrentSite(site)
  })
}

</script>


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