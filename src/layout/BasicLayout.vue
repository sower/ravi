<template>
  <div>
    <n-layout :native-scrollbar="false">
      <Header />
      <slot></slot>
      <Footer />
    </n-layout>
  </div>
</template>

<script setup lang="ts">
import Footer from '@/layout/Footer.vue';
import Header from '@/layout/Header.vue';


</script>


<style scoped>

</style>
