<script lang="ts" setup>
import { onMounted, onUnmounted } from '@vue/runtime-core';
import { setTitle } from '~/store/projectSetting';
import { useWebsiteStore } from '~/store/website';
const { t } = useI18n()
setTitle(t('header.keyboard-mode'))

const keys = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

const refKeys: any = reactive({})

const setRefs = (e: HTMLElement) => {
  if (e)
    refKeys[e.innerText.trim()] = e
}
const space: Ref<any> = ref(null)
const editable = ref(false)
const websiteStore = useWebsiteStore()
const hotkeys = websiteStore.getHotKeys
const onClick = (k: string) => {
  if (!editable.value && hotkeys[k])
    window.open(hotkeys[k].url)
}

const pressKey = (e) => {
  const key = e.key.toUpperCase()
  if (!editable.value && /^[\dA-Z]$/.test(key))
    refKeys[key].className = 'press'
  if (e.code === 'Space') {
    e.preventDefault()
    space.value.classList.add('press')
    //  Edit Mode
    editable.value = !editable.value
    window.$message.success(`${editable.value ? 'Open' : 'Close'} Edit mode`)
  }
}

onMounted(() => {
  document.addEventListener('keydown', pressKey)
  document.onkeyup = function (e) {
    const key = e.key.toUpperCase()
    if (/^[\dA-Z]$/.test(key))
      refKeys[key].className = ''
    space.value.classList.remove('press')
    if (!editable.value && hotkeys[key])
      window.open(hotkeys[key].url)
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', pressKey)
  document.onkeyup = null
})
</script>

<template>
  <div class="container">
    <div v-for="row_keys in keys" :key="row_keys" class="row">
      <button v-for="key in row_keys" :key="key" :ref="setRefs" @click="onClick(key)">
        <favicon v-if="hotkeys[key]" class="fav" :src="hotkeys[key].url" :text="hotkeys[key].name" />

        <n-popover style="text-align: center" :disabled="!hotkeys[key]" trigger="hover">
          <template #trigger>
            {{ key }}
          </template>
          <span>{{ hotkeys[key].name }} </span>
          <template #footer>
            {{ hotkeys[key].url }}
          </template>
        </n-popover>
      </button>
    </div>
    <button ref="space" class="space">
      Space
    </button>
  </div>
</template>

<style scoped>
.container {
  /* background-color: #cccccc; */
  border: ridge medium #cccccc;
  padding: 2vmax;
  width: 85vmax;
  height: auto;
  margin: 8vh auto;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-content: center;
  flex-direction: column;
}

.row {
  padding: 16px 8px;
  height: 6em;
  text-align: center;
}

button {
  position: relative;
  background-color: white;
  font-size: larger;
  font-weight: bolder;
  margin-right: 16px;
  padding: 16px 24px;
  border: 1px groove grey;
  border-radius: 5px;
  box-shadow: inset 0 0 2em rgb(0 0 0 / 5%), 2px 2px 0px grey,
    0px 3px 9px rgb(0 0 0 / 70%);
  cursor: pointer;
  color: black;
}

button:hover,
.press {
  box-shadow: 2px 2px 0px grey, 3px 3px 9px rgba(0, 255, 255, 61);
  border: 1px groove black;
}

.fav {
  position: absolute;
  bottom: 3px;
  left: 3px;
  width: 1.25em;
  height: 1.25em;
  opacity: 0.75;
}

.space {
  width: 35%;
  margin: 1em auto;
}

@media screen and (max-width: 992px) {
  .container {
    padding: 5px 10px;
    width: 92vmax;
    margin: 25px auto;
  }

  button {
    margin-right: 10px;
    padding: 10px 16px;
  }

  .fav {
    bottom: 2px;
    left: 2px;
    width: 0.6em;
    height: 0.6em;
    opacity: 0.75;
  }
}

@media screen and (max-width: 576px) {
  button {
    margin-right: 0.1rem;
    padding: 0.12rem 0.18rem;
  }
}
</style>
