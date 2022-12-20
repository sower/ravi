<script setup lang="ts">
import type { FormInst } from 'naive-ui';
import { storeToRefs } from 'pinia';
import { useWebsiteStore } from '~/store/website';

const websiteStore = useWebsiteStore()
const { currentSite: site, showModal } = storeToRefs(websiteStore)
const formRef = ref<FormInst | null>(null)
const allowShortcut = (value: string) => !value || /^\w{1}$/.test(value)

const rules = {
  name: {
    required: true,
    min: 1,
    message: '至少有一个字符',
  },
  url: {
    required: true,
    min: 3,
    message: '最短长度为 3',
  },
  shortcut: {
    max: 1,
    message: '只能是单个可视字符',
  },

}

function saveSite(e: MouseEvent) {
  e.preventDefault()
  site.value.name = site.value.name.trim()
  site.value.url = site.value.url.trim()
  formRef.value?.validate((errors) => {
    if (errors) {
      window.$message.error('Invalid')
      return
    }
    websiteStore.setSite(site.value)
    window.$message.info('保存成功')
    showModal.value = false
  })
}
</script>

<template>
  <n-modal v-model:show="showModal" preset="dialog" title="编辑">
    <template #header>
      <div>自定义站点</div>
    </template>
    <template #icon>
      <n-icon i-carbon-edit size="18" />
    </template>

    <n-form ref="formRef" :model="site" :rules="rules">
      <n-form-item label="网站名" path="name">
        <n-input v-model:value="site.name" :maxlength="20" />
      </n-form-item>
      <n-form-item label="网站地址" path="url">
        <n-input v-model:value="site.url" />
      </n-form-item>
      <n-form-item label="快捷键" path="shortcut">
        <n-input v-model:value="site.shortcut" :allow-input="allowShortcut" :maxlength="1" />
      </n-form-item>
    </n-form>

    <template #action>
      <button btn @click="saveSite">
        保存
      </button>
    </template>
  </n-modal>
</template>
