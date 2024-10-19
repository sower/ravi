<script setup lang="ts">
import { setTitle } from '~/store/projectSetting'

setTitle('Lattice')
</script>

<template>
  <div p-2xl>
    <div class="search-box">
      <dropdown-search />
    </div>
    <grid />
  </div>
</template>

<style scoped>
.search-box {
  padding: 25px;
  padding-top: 5px;
  margin: auto;
  max-width: 80%;
  min-width: 345px;
}
</style>
