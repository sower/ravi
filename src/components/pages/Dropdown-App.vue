<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { openUrl } from '~/utils/common';

const websiteStore = useWebsiteStore()
const { websites } = storeToRefs(websiteStore)

const options = websites.value.map((website) => {
  return { label: website.title, key: website.id, sites: website.sites }
})

const selectGroup = ref(options[0].key)

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
  <div max-w-80vw mx-auto mt-5xl mb-xs>
    <div flex="~ wrap" justify-around>
      <div v-for="site in currentGroup.sites" :key="site" class="hover:color-#18a058" m-2 flex="~ col" items-center
        cursor-pointer @click="openUrl(site.url)">
        <Favicon :src="site.url" :text="site.name" />
        <p m-1>
          {{ site.name }}
        </p>
      </div>
    </div>
  </div>
</template>
