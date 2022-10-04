import { createI18n, useI18n } from 'vue-i18n';
import { LangEnum } from './../enum/appEnum';
import enLocale from './en_US';
import zhLocale from './zh_CN';
// import { zhCN, dateZhCN,enUS,dateEnUS } from 'naive-ui'
import { App } from 'vue';

const defaultLang = LangEnum.EN

export const messages = {
    [LangEnum.EN]: {
        ...enLocale,
    },
    [LangEnum.ZH]: {
        ...zhLocale,
        // ...zhCN,
    },
}

export const langKeys = [
    { key: LangEnum.ZH, label: '简体中文', disabled: false },
    { key: LangEnum.EN, label: 'English', disabled: false },
    { key: 'zh_TW', label: '繁体中文', disabled: false },
]

export const i18n = createI18n({
    legacy: false,
    // options: en | zh | es
    locale: defaultLang,
    fallbackLocale: 'en', // set fallback locale
    messages,
})

export function changeLocale(locale: LangEnum) {
    i18n.global.locale.value = locale;
}


export function setupI18n(app: App<Element>) {
    app.use(i18n);
}

export const t = (key: string) => {
    let { t } = useI18n();
    return t(key);
};
