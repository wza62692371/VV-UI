import Cc from './src/cc.vue';

Cc.install = function (Vue) {
  Vue.component(Cc.name, Cc);
};

export default Cc;
