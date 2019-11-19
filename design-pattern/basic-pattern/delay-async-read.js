'use strict';

const fs = require('fs');
const cache = {};

// callbackは、引き渡される関数
function consistentReadAsync(filename, callback) {
  // 4.chacheにfileが存在すると
  if (cache[filename]) {
    // 5.引き渡された関数callbackの引数にcache[filename]を渡すことをを先に実行させてから高階関数内の処理行う
    process.nextTick(() => callback(cache[filename]));
  } else {
    // 1.chacheが空なので、以下実行
    // 引数3である関数の引数にerrとdataを渡す
    fs.readFile(filename, 'utf8', (err, data) => {
      // 2.グローバルなchache変数へdata入れる
      cache[filename] = data;
      // 3.引き渡された関数callbackにdataを渡す
      callback(data);
    });
  }
}
consistentReadAsync('data.txt', callback1 => {
  console.log('1', callback1);

  consistentReadAsync(
    'data.txt',
    callback2 => console.log('2', callback2) //nextTcikでデータ渡してからcallback2内の処理を実行
  );
});
