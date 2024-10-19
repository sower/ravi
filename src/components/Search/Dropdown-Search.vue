<script setup lang="ts">
import type { DropdownOption } from 'naive-ui'

import { searchEngines } from '~/store/projectSetting'

const enableEngineType = searchEngines.value.engineType.filter(e => e[2])
const { engineList } = searchEngines.value

const dropdownEngines = enableEngineType.map((eType) => {
  return {
    label: eType[0],
    key: eType[1],
    children: engineList[eType[1]].map(
      (e) => { return { label: e.name, key: e.url, favicon: e.favicon } },
    ),
  }
})

const currentEngine = useStorage('currentEngine', dropdownEngines[0].children[0])

function setSearchEngine(key: string | number, option: DropdownOption) {
  currentEngine.value = option
}

// value
function onSearch(searchValue: string) {
  window.open(currentEngine.value.key.replaceAll('%s', searchValue))
}
</script>

<template>
  <n-input-group>
    <n-dropdown :options="dropdownEngines" :on-select="setSearchEngine">
      <n-button>
        <n-avatar mr-1 color="white" size="small" :src="currentEngine.favicon" />
        {{ currentEngine.label }}
      </n-button>
    </n-dropdown>
    <SearchPrompt :do-search="onSearch" />
  </n-input-group>
</template>
