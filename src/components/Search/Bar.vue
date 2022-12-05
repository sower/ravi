<template>
    <n-space align="center" :wrap="false">
        <n-avatar round size="small" style="background-color: #18a058">
            {{ props.index }}
        </n-avatar>
        <n-text strong>
            {{ props.content }}
        </n-text>
    </n-space>

</template>


<script setup lang="ts">
const props = defineProps({
    index: { type: String, required: true },
    content: String
})
</script>
