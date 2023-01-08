<script setup lang="ts">
import { setTitle } from '~/store/projectSetting';
import { getTophub } from '~/utils/requests';
const { t } = useI18n()
setTitle(t('header.hothub'))

const hotList = ref([])

function getTophubList() {
  getTophub().then((array: []) => hotList.value = array)
}

onBeforeMount(() => {
  getTophubList()
})
</script>

<template>
  <n-space justify="center" class="box">
    <div text-2xl font-medium i-carbon-fire color-red />
    <n-gradient-text :size="24" type="danger">
      {{ t('header.hothub') }}
    </n-gradient-text>
  </n-space>

  <n-space v-if="hotList.length === 0" class="my-[30vh]" vertical>
    <n-skeleton height="40px" mx-auto width="85%" />
    <n-skeleton height="40px" mx-auto width="80%" :sharp="false" />
    <n-skeleton height="40px" mx-auto width="80%" round />
    <n-skeleton height="40px" mx-auto circle />
  </n-space>
  <div v-for="item in hotList" :key="item" class="box">
    <HotThing :item="item" />
  </div>
</template>

<style scoped>
.box {
  margin: 20px auto;
  max-width: 85%;
}
</style>
