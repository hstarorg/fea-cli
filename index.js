#!/usr/bin/env node

const program = require('commander');
const packageJson = require('./package.json');
const version = `J-cli: ${packageJson.version}`;

program
  .version(version)
  .usage('J cli tool');

// 压缩图片
program
  .command('init <template>')
  .description('Init project template.')
  .action(template => {
    require('./lib/j_init')(template);
  });

// 解析命令
program.parse(process.argv);

//如果直接使用nc，那么显示help
if (process.argv.length === 2) {
  program.outputHelp();
}
