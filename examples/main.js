// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import VVUI from '../packages/index'
import i18n from './i18n/index';
// import '../packages/theme-default/src/index.less'
// import '../lib/theme-default/index.css'
// import '../lib/theme-default/button.css'
import hljs from 'highlight.js';

Vue.component('demo-block', demoBlock)
Vue.use(VVUI)

Vue.config.productionTip = false
router.afterEach(route => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  render: h => h(App)
})
