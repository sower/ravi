<script setup lang="ts">
import type { Engine } from '~/store/types'
import { searchEngines } from '~/store/projectSetting'

const enableEngineType = searchEngines.value.engineType.filter(e => e[2])
const selectEngineType = useStorage('selectEngineType', enableEngineType[0][1])
const { engineList } = searchEngines.value

function switchTab(value: string) {
  selectEngineType.value = value
}

function initEngines() {
  const engines = {}
  for (const eType of enableEngineType) {
    const typeName = eType[1]
    engines[typeName] = engineList[typeName].filter((engine: Engine) => engine?.checked).map((engine: Engine) => engine.url)
  }
  return engines
}

const selectEngines = useStorage('selectEngines', initEngines())

function checkTag(engine: Engine) {
  const subSelects = selectEngines.value[selectEngineType.value]
  if (engine?.checked) {
    engine.checked = false
    subSelects.pop(engine.url)
    return
  }
  engine.checked = true
  subSelects.push(engine.url)
}

// value
function onSearch(searchValue: string) {
  const currentEngines = selectEngines.value[selectEngineType.value]
  if (currentEngines.length > 0) {
    currentEngines.forEach((url) => {
      window.open(url.replaceAll('%s', searchValue))
    })
  }
  else {
    window.$message.warning('请先选择搜索引擎')
  }
}
</script>

<template>
  <div align-center m-7 flex justify-center>
    <n-gradient-text :size="36" type="success">
      Search
    </n-gradient-text>
    <div ml-4 text-4xl class="i-carbon:search-advanced" />
  </div>

  <div class="mx-auto w-[85%]">
    <n-tabs
      class="mx-auto" justify-content="space-evenly" size="large" type="bar" :default-value="selectEngineType"
      animated @update:value="switchTab"
    >
      <n-tab-pane v-for="item in enableEngineType" :key="item[1]" :name="item[1]" :tab="item[0]" />
    </n-tabs>

    <div class="mx-auto w-[90%]">
      <search-prompt :do-search="onSearch" size="large" />
    </div>

    <n-space justify="space-around" class="mb-8 mt-5">
      <n-tag
        v-for="engine in engineList[selectEngineType]" :key="engine" :bordered="false"
        :checked="engine.checked" round checkable @click="checkTag(engine)"
      >
        {{ engine.name }}
        <template #avatar>
          <n-avatar color="white" :src="getFavicon(engine.url)" :fallback-src="engine.favicon" />
        </template>
      </n-tag>
    </n-space>
  </div>
</template>

<style scoped>
:deep(.n-input) {
  border-radius: 3rem;
}

:deep(.n-tabs .n-tab-pane) {
  padding: 0;
}

:deep(.n-tabs .n-tabs-bar) {
  height: 3px;
}
</style>
