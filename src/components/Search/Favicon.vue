<script lang="ts" setup>
const props = defineProps<{
  src: string
  text: string
}>()

const showImg = ref(Boolean(props.src))

watch(props, () => {
  showImg.value = true
})
</script>

<template>
  <n-avatar v-if="showImg" size="medium" color="white" :src="getFavicon(src)" @error="showImg = false" />
  <n-avatar v-else size="medium" color="#18A058">
    {{ text.slice(0, 2) }}
  </n-avatar>
</template>
