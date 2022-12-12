<script setup lang="ts">
import defaultEngines from '~/store/config/searchEngines.json';

const searchEngines = useStorage('searchEngines', defaultEngines)

const { engineList } = searchEngines.value

const engineType = searchEngines.value.engineType.filter(e => e[2])

const selectEngineType = useStorage('selectEngineType', 'web')

function switchTab(value: string) {
  selectEngineType.value = value
}

function initEngines() {
  const engines = {}
  for (const eType of engineType) {
    const typeName = eType[1]
    engines[typeName] = engineList[typeName].filter(engine => engine?.checked).map(engine => engine.url)
  }
  return engines
}

const selectEngines = useStorage('selectEngines', initEngines())

function checkTag(engine) {
  if (engine?.checked) {
    engine.checked = false
    selectEngines.value[selectEngineType.value].pop(engine.url)
    return
  }
  engine.checked = true
  selectEngines.value[selectEngineType.value].push(engine.url)
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
  <div m-7 flex justify-center align-center>
    <n-gradient-text :size="36" type="success">
      Search
    </n-gradient-text>
    <div text-4xl ml-4 class="i-carbon:search-advanced" />
  </div>

  <div class="w-[85%] mx-auto">
    <n-tabs class="mx-auto" justify-content="space-evenly" size="large" type="bar" :default-value="selectEngineType"
      animated @update:value="switchTab">
      <n-tab-pane v-for="item in engineType" :key="item" :name="item[1]" :tab="item[0]" />
    </n-tabs>

    <div class="w-[90%] mx-auto">
      <search-prompt :do-search="onSearch" />
    </div>

    <n-space justify="space-around" class="my-8">
      <n-tag v-for="engine in engineList[selectEngineType]" :key="engine" :bordered="false" checkable
        :checked="engine.checked" round @click="checkTag(engine)">
        {{ engine.name }}
        <template #avatar>
          <n-avatar color="white" :src="engine.favicon" />
        </template>
      </n-tag>
    </n-space>
  </div>
</template>

<style scoped>

</style>
