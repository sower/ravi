<script lang="ts" setup>
const props = defineProps({
  src: String,
  text: String,
})

const showImg = ref(Boolean(props.src))

function getFavicon(url: string) {
  const link = `${new URL(url).origin}/favicon.ico`
  return link
}

watch(props, (cur, pre) => {
  showImg.value = true
})
</script>

<template>
  <n-avatar v-if="showImg" size="medium" color="white" :src="getFavicon(src)" @error="showImg = false" />
  <n-avatar v-else size="medium" color="#18A058">
    {{ text.slice(0, 2) }}
  </n-avatar>
</template>
