<template>
  <n-layout-footer class="foot"> ©2022 {{ t("navigation") }}</n-layout-footer>
</template>


<script setup lang="ts">
import { t } from "@/lang";
</script>


<style scoped>
.foot {
  text-align: center;
  opacity: 0.7;
}
</style>