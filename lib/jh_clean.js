'use strict';

let del = require('del');

module.exports = (path, options) => {
  del([path], () => {
    console.log('Clean Succeed');
  });
};