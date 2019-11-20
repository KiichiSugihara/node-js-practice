'use strict';

const EventEmitter = require('events').EventEmitter;
const fs = require('fs');

// 3つのイベント
function findPattern(files, regex) {
  // emitterをインスタンス化
  const emitter = new EventEmitter();
  files.forEach(function(file) {
    fs.readFile(file, 'utf8', (err, content) => {
      // エラーが発生したら通知するイベントを発火
      if (err) return emitter.emit('error', err);
      // file読み込みが終わると通知するイベントを発火
      emitter.emit('fileread', file);
      let match;
      if ((match = content.match(regex)))
        // 指定したパターンがfile内に見つかったら通知する通知するイベントを発火
        match.forEach(elem => emitter.emit('found', file, elem));
    });
  });
  // return するの忘れずに
  return emitter;
}

findPattern(['fileA.txt', 'fileB.json'], /hello \w+/g)
  // イベントを監視する事を登録し、イベントが発生したら、以下の処理をそれぞれ行う
  .on('fileread', file => console.log(file + ' was read'))
  .on('found', (file, match) =>
    console.log('Matched "' + match + '" in file ' + file)
  )
  .on('error', err => console.log('Error emitted: ' + err.message));
