<script setup lang="ts">
import type { Ref } from '@vue/reactivity'
import { reactive, ref, toRef } from '@vue/reactivity'
import type { DropdownOption, SelectOption } from 'naive-ui'
import type { VNodeChild } from 'vue'
import { h, watch } from 'vue'
import { getSearchPrompt } from '~/utils/requests'
import Bar from './Bar.vue'
import Favicon from './Favicon.vue'

const searchEngines = [
  {
    label: 'Google',
    key: 'https://google.com',
  },
  {
    label: 'Bing',
    key: 'https://cn.bing.com',
  },
  {
    label: 'Baidu',
    key: 'https://www.baidu.com',
    query: 's?wd=',
  },
]

const searchKey = ref('')
const searchPrompt: Ref<any> = ref([])

const dataRef: any = reactive({ currentEngine: searchEngines[1] })
const currentEngine: DropdownOption | any = toRef(dataRef, 'currentEngine')

function setSearchEngine(key: string | number, option: DropdownOption) {
  dataRef.currentEngine = option
}

// label
function getShow(searchLabel: string) {
  return searchLabel.trim() !== ''
}

// value
function onSearch(searchValue: string) {
  const searchLabel = searchPrompt.value[parseInt(searchValue)].label
  window.open(
    `${dataRef.currentEngine.key}/${dataRef.currentEngine.query || 'search?q='
    }${searchLabel}`,
  )
}

function renderLabel(option: SelectOption): VNodeChild {
  return [
    h(Bar, { index: option.value, content: option.label }),
  ]
}

watch(searchKey, (cur, pre) => {
  if (cur.trim().length === 0)
    return
  getSearchPrompt(cur.trim()).then((array) => {
    let prompts = [{ label: cur, value: '0' }]
    if (array) {
      prompts = prompts.concat(array.map((e: string, index: number) => {
        return {
          label: e,
          value: String(index + 1),
        }
      }))
    }
    searchPrompt.value = prompts
  }).catch(e => console.log(e))
})
</script>

<template>
  <n-input-group>
    <n-dropdown style="max-width: 7em" :options="searchEngines" :on-select="setSearchEngine">
      <n-button>
        <n-space align="center" justify="space-around">
          <Favicon :src="currentEngine.key" :text="currentEngine.label" />
          {{ currentEngine.label }}
        </n-space>
      </n-button>
    </n-dropdown>
    <n-auto-complete v-model:value="searchKey" :input-props="{ maxlength: '10' }" :options="searchPrompt"
      blur-after-select clearable :on-select="onSearch" :render-label="renderLabel" placeholder="Search ..."
      @get-show="getShow">
      <template #suffix>
        <div i-carbon-search />
      </template>
    </n-auto-complete>
  </n-input-group>
</template>

