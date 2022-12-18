<script setup lang="ts">
import { reactive, toRef } from '@vue/reactivity';
import type { DropdownOption } from 'naive-ui';

import defaultEngines from '~/store/config/searchEngines.json';

const searchEngines = useStorage('searchEngines', defaultEngines)

const { engineList } = searchEngines.value

const selectEngineType = useStorage('selectEngineType', 'web')

const dropdownEngines = engineList[selectEngineType.value].map(
  (e) => { return { label: e.name, key: e.url, favicon: e.favicon } })

const dataRef: any = reactive({ currentEngine: dropdownEngines[0] })
const currentEngine = toRef(dataRef, 'currentEngine')

function setSearchEngine(key: string | number, option: DropdownOption) {
  dataRef.currentEngine = option
}

// value
function onSearch(searchValue: string) {
  window.open(dataRef.currentEngine.key.replaceAll('%s', searchValue))
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

