<script setup lang="ts">
import type { Ref } from '@vue/reactivity'
import { ref } from '@vue/reactivity'
import type { onSearch, SelectOption } from 'naive-ui'
import type { VNodeChild } from 'vue'
import { h, watch } from 'vue'
import { getSearchPrompt } from '~/utils/requests'
import Bar from './Bar.vue'

export interface Props {
  doSearch: onSearch
  size?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium',
})

const searchKey = ref('')
const searchPrompt: Ref<any> = ref([])

// value
function executeSearch(searchValue: string) {
  const searchLabel = searchPrompt.value[parseInt(searchValue)].label
  props.doSearch(searchLabel)
}

// label
function getShow(searchLabel: string) {
  return searchLabel.trim() !== ''
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
  <n-auto-complete v-model:value="searchKey" :input-props="{ maxlength: '10' }" :options="searchPrompt" :size="size"
    blur-after-select clearable :on-select="executeSearch" :render-label="renderLabel" placeholder="Search ..."
    @get-show="getShow">
    <template #suffix>
      <div i-carbon-search />
    </template>
  </n-auto-complete>
</template>
