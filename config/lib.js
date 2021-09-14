var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');
var externals = {};


Object.keys(Components).forEach(function(key) {
  externals[`cc-ui/packages/${key}`] = `cc-ui/lib/${key}`;
});

externals = [Object.assign({
    vue: 'vue'
  }, externals), nodeExternals()];

  exports.externals = externals;


  exports.alias = {
    main: path.resolve(__dirname, '../packages'),
    examples: path.resolve(__dirname, '../examples'),
    'cc-ui': path.resolve(__dirname, '../')
  };
  

  exports.vue = {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  };
  

  exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/;
