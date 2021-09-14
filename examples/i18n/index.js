import Vue from 'vue';
import en from './langs/en';
import zhcn from './langs/zh-CN';
import zhtw from './langs/zh-TW';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: window.localStorage.getItem('language') || 'zhcn',
    messages: {
        en: en,
        zhcn: zhcn,
        zhtw: zhtw,
    },
    // silentTranslationWarn: true   //此为删除控制台报警
})
export default i18n
