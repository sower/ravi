<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { openUrl } from '~/utils/common'

const websiteStore = useWebsiteStore()
const { websites } = storeToRefs(websiteStore)

const options = Object.keys(websites.value).map((group) => {
  return { label: group, key: group, sites: websites.value[group] }
})

// default select group
const selectGroup = ref<string | number>(options[0].key)

const currentGroup = computed(() => {
  for (const option of options) {
    if (option.key === selectGroup.value)
      return option
  }
})

function handleSelect(key: string | number) {
  selectGroup.value = key
}
</script>

<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <div flex justify-center text-xl>
      <div mr-2 text-2xl class="i-carbon-container-services" />
      <button>{{ currentGroup.label }}</button>
      <div text-2xl class="i-carbon:caret-down" />
    </div>
  </n-dropdown>
  <div mx-auto mb-2xl mt-5xl max-w-80vw>
    <div flex="~ wrap" justify-around>
      <a
        v-for="site in currentGroup.sites" :key="site"
        :href="site.url" target="_blank" class="hover:color-#18a058" flex="~ col"
        m-2 cursor-pointer items-center
      >
        <Favicon :src="site.url" :text="site.name" />
        <p m-1>
          {{ site.name }}
        </p>
      </a>
    </div>
  </div>
</template>
