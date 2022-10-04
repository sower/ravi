import { LangEnum } from '@/enum/appEnum';
import { changeLocale } from '@/lang';
import { store } from '@/store';
import { defineStore } from 'pinia';


interface ProjectSettingState {
  language: string; //语言
  navMode: string; //导航模式
  theme: string; //导航风格
  isMobile: boolean;
}

export const useProjectSettingStore = defineStore({
  id: 'app-project-setting',
  state: (): ProjectSettingState => ({
    language: localStorage.getItem('lang') || 'en',
    //导航模式 vertical 左侧菜单模式 horizontal 顶部菜单模式
    navMode: 'vertical',
    //导航风格 dark 暗色侧边栏 light 白色侧边栏 header-dark 暗色顶栏
    theme: '',
    // 是否处于移动端模式
    isMobile: false,
  }),
  getters: {
    getLanguage(): string {
      return this.language;
    },
    getNavMode(): string {
      return this.navMode;
    },
    getTheme(): string {
      return this.theme;
    },
    getIsMobile(): boolean {
      return this.isMobile;
    },
  },
  actions: {
    setLanguage(value: LangEnum): void {
      this.language = value;
      changeLocale(value);
    },
    setTheme(value: string): void {
      this.theme = value;
    },
    setIsMobile(value: boolean): void {
      this.isMobile = value;
    },
  },
});

// Need to be used outside the setup
export function useProjectSettingStoreWithOut() {
  return useProjectSettingStore(store);
}
