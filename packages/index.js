/**
 * @author monkeywang
 * Date: 17/11/9
 */
import WButton from "./button/index.js";
// import WInput from './input/index.js';
import WButtonGroup from "./button-group/index.js";
import WRow from "./row/index";
import WCol from "./col/index";
import WTag from "./tag/index";
import WShowMore from "./show-more/index";
import WLimitTextArea from "./limit-textarea/index";
import MetaInfo from "./meta-info/index";
import WAlert from "./alert/index";
import WLoadingBar from "./loading-bar/index";
import Skeleton from "./skeleton/index";
import WCc from "./cc/index";
import locale from "./utils/i18n/locale";
import mixins from "./utils/i18n/mixins";

const components = [
  WButton,
  // WInput,
  WButtonGroup,
  WRow,
  WCol,
  WTag,
  WShowMore,
  WLimitTextArea,
  WAlert,
  Skeleton,
  WCc
];

const install = function(Vue, options = {}) {
  if (install.installed) return;
  components.map(component => Vue.component(component.name, component));
  MetaInfo.install(Vue);
  Vue.prototype.$loading = WLoadingBar;

  // 初始化
  locale.use(options.locale);
  locale.i18n(options.i18n);
  // 全局混入
  // Vue.mixin({
  // 	mixins: [mixins]
  // })
};

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version: "0.0.1",
  install,
  WButton,
  WButtonGroup,
  locale,
  // WInput,
  WRow,
  WCol,
  WTag,
  WShowMore,
  WLimitTextArea,
  MetaInfo,
  WAlert,
  WLoadingBar,
  Skeleton
};
