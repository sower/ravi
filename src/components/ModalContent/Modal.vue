<script setup lang="ts">
import type { FormInst } from 'naive-ui';
import { storeToRefs } from 'pinia';
import { useWebsiteStore } from '~/store/website';

const websiteStore = useWebsiteStore()
const { currentSite: site, showModal } = storeToRefs(websiteStore)
const formRef = ref<FormInst | null>(null)

const rules = {
  name: {
    key: 'a',
    required: true,
    min: 1,
    message: '不能为空',
  },
  url: {
    required: true,
    min: 3,
    message: '最短长度为 3',
  },
}

function saveSite(e: MouseEvent) {
  e.preventDefault()
  formRef.value?.validate((errors) => {
    if (!errors) {
      websiteStore.setSites(site.value)
      window.$message.info('保存成功')
      showModal.value = false
    }
    else {
      console.log(errors)
      window.$message.error('Invalid')
    }
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
        <n-input v-model:value="site.name" />
      </n-form-item>
      <n-form-item label="网站地址" path="url">
        <n-input v-model:value="site.url" />
      </n-form-item>
      <n-form-item label="快捷键" path="shortcut">
        <n-input v-model:value="site.shortcut" />
      </n-form-item>
    </n-form>

    <template #action>
      <button btn @click="saveSite">
        保存
      </button>
    </template>
  </n-modal>
</template>
