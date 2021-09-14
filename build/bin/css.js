'use strict';
const fs = require('fs');
const path = require('path');
let Components = require('../../components.json');
Components = Object.keys(Components);


function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

  Components.forEach(function(key) {
    var fileName = key + '.less';
    var filePath = path.resolve('./packages','theme-default', 'src', fileName);
    // console.log('filePath: ', filePath);
    if (!fileExists(filePath)) {
      fs.writeFileSync(filePath, '', 'utf8');
      console.log(key, ' 创建遗漏的 ', fileName, ' 文件');
    }
  });
