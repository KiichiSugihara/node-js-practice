'use strict';
// 同期的なファイル読み込み
const fs = require('fs');
const cache = {};
function consistentReadSync(filename) {
  if (cache[filename]) {
    return cache[filename];
  } else {
    cache[filename] = fs.readFileSync(filename, 'utf8');
    return cache[filename];
  }
}

console.log(consistentReadSync('data.txt'));
// 一度読み込んでるので、chacheから読み込み
console.log(consistentReadSync('data.txt'));
