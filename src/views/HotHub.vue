<template>
  <BasicLayout>
    <n-space justify="center" class="box">
      <n-icon size="36" color="red">
        <FireFilled />
      </n-icon>
      <n-gradient-text :size="24" type="danger">
        Hothub
      </n-gradient-text>
    </n-space>

    <div v-for="item in hotList" class="box">
      <HotThing :item="item" />
    </div>
  </BasicLayout>
</template>

<script setup lang="ts">
import BasicLayout from '@/layout/BasicLayout.vue';
import HotThing from '@/layout/HotThing.vue';
import { getTophub } from '@/utils/requests';
import { FireFilled } from '@vicons/antd';
import { onBeforeMount } from "@vue/runtime-core";
import { ref } from 'vue';

const hotList = ref([])

function getTophubList() {
  getTophub().then((array: []) => hotList.value = array)
}

onBeforeMount(() => {
  getTophubList();
});
</script>

<style scoped>
.box {
  margin: 20px auto;
  max-width: 85%;
}
</style>