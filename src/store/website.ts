import { defineStore } from 'pinia'
import websites from './config/websites.json'
import type { Site } from './types'

const storage = localStorage

function saveToStorage(websites: Array<Site>) {
  storage.setItem('websites', JSON.stringify(websites))
}

export const useWebsiteStore = defineStore({
  id: 'app-site',
  state: () => ({
    websites: JSON.parse(storage.getItem('websites')) || websites,
    currentSite: { name: '', url: '', shortcut: '' },
    showModal: false,
  }),
  getters: {
    getHotKeys(): object {
      const hotkeys: any = {}
      for (const key of Object.keys(this.websites)) {
        this.websites[key].forEach((site: Site, index: number) => {
          if (site.shortcut)
            hotkeys[site.shortcut] = { ...site, index, group: key }
        })
      }
      return hotkeys
    },
  },
  actions: {
    setCurrentSite(site: Site) {
      this.currentSite = { ...site }
    },
    setShowModal(showModal: boolean) {
      this.showModal = showModal
    },
    setSite(site: Site) {
      // set new shortcut
      if (site.shortcut) {
        site.shortcut = site.shortcut.toUpperCase()
        const hotkeys = this.getHotKeys
        const preSite = hotkeys[site.shortcut]
        if (preSite) {
          // solve hotkey confict
          this.websites[preSite.group][preSite.index].shortcut = null
        }
      }
      const { group, index, ...newSite } = site
      this.websites[group][index] = newSite
      saveToStorage(this.websites)
    },
    setTitle(title: string, newTitle: string) {
      const websitesCopy: any = {}
      for (const key of Object.keys(this.websites)) {
        if (key === title)
          websitesCopy[newTitle] = this.websites[key]
        else websitesCopy[key] = this.websites[key]
      }
      this.websites = websitesCopy
      saveToStorage(this.websites)
    },
    setWebsites(websites: Array<Site>) {
      this.websites = websites
      saveToStorage(websites)
    },
  },
})

// Need to be used outside the setup
export function useWebsiteStoreWidthOut() {
  return useWebsiteStore(store)
}
