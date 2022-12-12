<script setup lang="ts">
import type { LangEnum } from '~/enum/appEnum';
import { useProjectSettingStore } from '~/store/projectSetting';

const { t, availableLocales: locales, locale } = useI18n()

const langOptions = locales.map((lang) => {
  return {
    label: t(lang),
    key: lang,
    disabled: false,
  }
})

const settingStore = useProjectSettingStore()

function getLanguageList() {
  langOptions.forEach((lang) => {
    lang.disabled = lang.key === settingStore.language
  })
  return langOptions
}

function changeLanguage(key: LangEnum) {
  window.$message.info(key)
  settingStore.setLanguage(key)
  locale.value = key
}

function changeTheme() {
  settingStore.theme
    ? settingStore.setTheme('')
    : settingStore.setTheme('dark')
}

function hello() {
  window.$message.info(t('Hello'))
}
</script>

<template>
  <n-layout-header pb-1>
    <n-space align="center" justify="space-around" size="large">
      <n-space text-2xl align="center" justify="space-around">
        <div text-3xl i-ravi-fav />
        <router-link to="/">
          <h1 class="color-#18a058 hover:color-#36ad6a">
            Ravi
          </h1>
        </router-link>
      </n-space>

      <n-space text-4 font-bold justify="space-around">
        <router-link to="/keyboard" theme-color>
          {{ t("header.keyboard-mode") }}
        </router-link>
        <n-divider vertical />
        <router-link to="/search" theme-color>
          {{ t("header.search-mode") }}
        </router-link>
        <n-divider vertical />
        <router-link to="/hothub" theme-color>
          {{ t("header.hothub") }}
        </router-link>
      </n-space>

      <n-space text-xl font-medium align="center" justify="space-around">
        <div theme-color cursor-pointer i-carbon-user @click="hello" />
        <router-link to="/Settings">
          <div theme-color i="carbon-settings" />
        </router-link>
        <n-dropdown trigger="hover" :options="getLanguageList()" @select="changeLanguage">
          <div theme-color i-carbon:ibm-watson-language-translator />
        </n-dropdown>

        <n-text cursor-pointer @click="changeTheme">
          <div v-if="settingStore.theme" theme-color i-carbon-moon />
          <div v-else theme-color i="carbon-sun" />
        </n-text>
      </n-space>
    </n-space>
  </n-layout-header>
</template>

