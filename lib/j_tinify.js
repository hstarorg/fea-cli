const path = require('path');
const tinify = require('tinify');
const config = require('./../config');
const util = require('./util');

tinify.key = config.tinifyKey;

console.log(`本月可用次数：${tinify.compressionCount}`);

module.exports = (filepath, cmd) => {
  let targetFolder = 'optimized';
  util.ensureDirExists(targetFolder);
  let source = tinify.fromFile(filepath);
  let targetPath = path.join(targetFolder, path.basename(filepath));
  source.toFile(targetPath);
};