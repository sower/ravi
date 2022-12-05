<template>
    <div class="w-[85%] mx-auto">

        <n-tabs class="mx-auto" default-value="oasis" justify-content="space-evenly" size="large" type="bar">
            <n-tab-pane name="oasis" tab="通用">
            </n-tab-pane>
            <n-tab-pane name="the beatles" tab="社交">
            </n-tab-pane>
            <n-tab-pane name="jay chou" tab="其他">
            </n-tab-pane>
        </n-tabs>

        <div class="w-[90%] mx-auto">
            <n-auto-complete :input-props="{ maxlength: '10' }" v-model:value="searchKey" :options="searchPrompt"
                blur-after-select clearable @get-show="getShow" :render-label="renderLabel" placeholder="Search ...">
                <template #suffix>
                    <n-icon :component="SearchOutlined" />
                </template>
            </n-auto-complete>
        </div>

        <n-space justify="space-around" class="my-8">
            <n-tag :bordered="false">
                爱在西元前
            </n-tag>
            <n-tag :bordered="false" type="success">
                不该
            </n-tag>
            <n-tag :bordered="false" type="warning">
                超人不会飞
            </n-tag>
            <n-tag :bordered="false" type="error">
                手写的从前
            </n-tag>
            <n-tag :bordered="false" type="info">
                哪里都是你
            </n-tag>
        </n-space>
    </div>

</template>

<script setup lang="ts">
import { getSearchPrompt } from '@/utils/requests';
import { SearchOutlined } from "@vicons/antd";
import { reactive, Ref, ref } from "@vue/reactivity";
import { DropdownOption, SelectOption } from 'naive-ui';
import { h, VNodeChild, watch } from "vue";
import Bar from './Bar.vue';


const searchEngines = {
    general: [
        {
            label: "Google",
            key: "https://google.com",
        },
        {
            label: "Bing",
            key: "https://cn.bing.com",
        },
        {
            label: "Baidu",
            key: "https://www.baidu.com",
            query: "s?wd=",
        },
    ]
};

const searchKey = ref("");
const searchPrompt: Ref<any> = ref([]);

const dataRef: any = reactive({ currentEngine: searchEngines[1] })
// const currentEngine: DropdownOption | any = toRef(dataRef, 'currentEngine');

function setSearchEngine(key: string | number, option: DropdownOption) {
    dataRef.currentEngine = option;
}

// label
function getShow(searchLabel: string) {
    return searchLabel.trim() !== "";
}

// value
function onSearch(searchValue: string) {
    const searchLabel = searchPrompt.value[parseInt(searchValue)].label
    window.open(
        `${dataRef.currentEngine.key}/${dataRef.currentEngine.query || "search?q="
        }` + searchLabel
    );
}


function renderLabel(option: SelectOption): VNodeChild {
    return [
        h(Bar, { index: option.value, content: option.label }),
    ]
}

watch(searchKey, (cur, pre) => {
    if (cur.trim().length === 0) return;
    getSearchPrompt(cur.trim()).then(array => {
        let prompts = [{ label: cur, value: '0' }];
        if (array) {
            prompts = prompts.concat(array.map((e: string, index: number) => {
                return {
                    label: e,
                    value: String(index + 1)
                }
            }))
        }
        searchPrompt.value = prompts;
    }).catch(e => console.log(e))
})


</script>

<style scoped>

</style>
