<template>
  <n-layout-content content-style="padding: 24px;">
    <div class="search-box">
      <search />
    </div>
    <grid />
  </n-layout-content>
</template>

<script setup lang="ts">
import Grid from '@/components/Grid/Grid.vue';
import Search from '@/components/Search/Search.vue';
</script>

<style scoped>
.search-box {
  padding: 25px;
  padding-top: 5px;
  margin: auto;
  max-width: 80%;
  min-width: 345px;
}
</style>