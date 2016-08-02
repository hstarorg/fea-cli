#!/usr/bin/env node

'use strict';

let program = require('commander');
let packageJson = require('./package.json');

let jhClean = require('./lib/jh_clean');
let version = `Newkit-cli: ${packageJson.version}`;

program
  .version(version)
  .usage('JH cli tool');

// 清理目录
program
  .command('clean <path>')
  .description('Clean files and folders')
  .action((path, cmd) => {
    require('./lib/jh_clean')(path);
  });

// 解析命令
program.parse(process.argv);

//如果直接使用nc，那么显示help
if (process.argv.length === 2) {
  program.outputHelp();
}
