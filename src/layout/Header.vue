<template>
  <n-layout-header>
    <n-space align="center" justify="space-around" size="large">
      <n-space align="center" justify="space-around">
        <n-avatar color="white" size="large" src="./favicon.svg" />
        <h1 class="title">
          Ravi
        </h1>
      </n-space>

      <n-space class="font-bold" align="center" justify="space-around">
        <router-link to="/keyboard">键盘模式</router-link>
        <router-link to="/hothub">热榜</router-link>
      </n-space>

      <n-space align="center" justify="space-around">
        <n-avatar color="white">
          <n-icon color="black">
            <UserOutlined />
          </n-icon>
        </n-avatar>
        <n-avatar color="white">
          <n-icon color="black">
            <SettingTwotone />
          </n-icon>
        </n-avatar>
        <n-dropdown trigger="hover" :options="getLanguageList()" @select="changeLanguage">
          <n-text>{{ t("language") }}</n-text>
        </n-dropdown>

        <n-text @click="changeTheme">
          <n-avatar color="white" :src="`/svg/${settingStore.theme}.svg`" fallback-src="/svg/sun.svg" />
        </n-text>
      </n-space>

    </n-space>
  </n-layout-header>
</template>

<script setup lang="ts">
import { LangEnum } from '@/enum/appEnum';
import { langKeys, t } from '@/lang';
import { useProjectSettingStore } from '@/store/modules/projectSetting';
import { SettingTwotone, UserOutlined } from '@vicons/antd';

const settingStore = useProjectSettingStore()

function getLanguageList() {
  langKeys.forEach(lang => {
    lang.disabled = lang.key === settingStore.language;
  })
  return langKeys;
}

function changeLanguage(key: LangEnum) {
  window.$message.info(key)
  settingStore.setLanguage(key)
}
function changeTheme() {
  settingStore.theme ?
    settingStore.setTheme('') : settingStore.setTheme('dark');
  return settingStore.theme;
}


</script>

<style scoped>
.title {
  color: #18a058;
  font-size: x-large;
}
</style>
