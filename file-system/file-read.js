// ファイルを読み込む
var fs = require('fs');

// test.txtを読み込む
fs.readFile(__dirname + '/test.txt', { encoding: 'utf8' }, function(err, data) {
  // ファイルの読み込みが終わったらこのコールバック関数が呼ばれる
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
