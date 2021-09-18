import Vue from 'vue'
import App from './App'
import router from './router'
import demoBlock from './components/demo-block.vue'
import VVUI from '../packages/index'
import '../packages/theme-default/src/index.less'
// import '../lib/theme-default/index.css'
// import '../lib/theme-default/button.css'
import hljs from 'highlight.js';


// locale.use(lang)

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
  render: h => h(App)
})
