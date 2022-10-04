<template>
    <n-avatar size="small" color="white" :src="getFavicon(src)" @error="showImg=false" v-if="showImg" />
    <n-avatar size="small" color="#18A058" v-else>{{text.slice(0,2)}}</n-avatar>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

const props = defineProps({
    src: String,
    text: String
})

const showImg = ref(Boolean(props.src))

function getFavicon(url: string) {
    const link = new URL(url).origin + '/favicon.ico'
    console.log(link);
    return link;
}

watch(props, (cur, pre) => {
    showImg.value = true
})
</script>

<style>

</style>