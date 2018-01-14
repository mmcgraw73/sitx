#! /usr/bin/env node

const replace = require('replace');
const exec = require('child_process').exec;
const sitval = process.argv.slice(2);
const searchPattern = "-r -l 'localhost:1111/sit' ./content/src/main/content/jcr_root/etc/designs/zig";

const sitUpdate = exec('grep ' + searchPattern, function(err,stdout,stderr) {
  let arr = stdout.split("\n");
  arr.pop();
  arr.length <= 0 ? console.log('fail, not found: ', 'sit' + sitval) : console.log('success, files found: ', arr.length);
  console.log('files updated:\n', arr);
  replace({
      regex: 'localhost:1111/sit' + '[1-9]\{1\}',
      replacement: 'localhost:1111/sit' + sitval,
      paths: arr,
      recursive: true,
      silent: true
  });
});
