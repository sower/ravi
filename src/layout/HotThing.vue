<template>
    <n-thing content-indented>
        <template #avatar>
            <n-avatar :src="item.logo" />
        </template>

        <template #header>
            <div style="cursor: pointer;font-weight: bold;" @click="openUrl(item.url)">
                {{item.title}}
            </div>
        </template>

        <template #header-extra>
            <n-tag type="error" round>
                {{item.views}}
            </n-tag>
        </template>

        <template #description>
            <n-space justify="space-around" :wrap="false">
                <n-image width="180" lazy :src="item.thumbnail" />
                {{item.description}}
            </n-space>
        </template>

        <template #footer>
            <n-time :time="new Date(item.time*1000)" format="yyyy-MM-dd hh:mm:ss" />
        </template>
    </n-thing>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';


interface Item {
    title: String,
    description: String,
    url: String,
    logo: String,
    time: Number,
    extra: String,
    views: String,
    thumbnail: String,
}

defineProps({
    item: {
        type: Object as PropType<Item>,
        required: true,
    }
})

function openUrl(url: string) {
    window.open(url)
}


</script>

<style>

</style>