import { store } from '@/store';
import { defineStore } from 'pinia';
import websites from './websites.json';


const storage = localStorage

function getCoordinate(id: number) {
    let x = Math.floor(id / 10) - 1;
    let y = id % 10 - 1;
    return { x, y };
}

function saveToStorage(websites) {
    storage.setItem("websites", JSON.stringify(websites));
}

export const useWebsiteStore = defineStore({
    id: 'app-site',
    state: () => ({
        websites: JSON.parse(storage.getItem('websites')) || websites,
        currentSite: { id: 0, name: '', url: '', shortcut: '' },
        showModal: false,
    }),
    getters: {
        getHotKeys(): object {
            const hotkeys = {}
            this.websites.forEach((websites: object) => {
                websites.sites.forEach(site => {
                    if (site.shortcut) {
                        hotkeys[site.shortcut] = site
                    }
                });
            });
            return hotkeys;
        }
    },
    actions: {
        setCurrentSite(site) {
            this.currentSite = { ...site }
        },
        setShowModal(showModal: boolean) {
            this.showModal = showModal;
        },
        removeShortcut(site) {
            // solve hotkey confict
            const { id } = site
            const { x, y } = getCoordinate(id)
            this.websites[x].sites[y].shortcut = null;
        },
        setSites(site) {
            const { x, y } = getCoordinate(site.id)
            let sites = this.websites[x].sites;

            // set new shortcut
            if (site.shortcut) {
                site.shortcut = site.shortcut.toUpperCase()
                const hotkeys = this.getHotKeys
                const preSite = hotkeys[site.shortcut]
                if (preSite) this.removeShortcut(preSite);
            }
            sites[y] = site;
            saveToStorage(this.websites);
        },
        setTitle(id: number, title: string) {
            const { x } = getCoordinate(id)
            this.websites[x].title = title;
            saveToStorage(this.websites);
        },
        setWebsites(websites) {
            this.websites = websites;
            saveToStorage(websites);
        },
    },
});


// Need to be used outside the setup
export function useWebsiteStoreWidthOut() {
    return useWebsiteStore(store);
}
