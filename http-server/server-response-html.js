const http = require('http');
const fs = require('fs');
// HTTPサーバーのオブジェクトを作成
const server = http.createServer(function(req, res) {
  if (req.url === '/') {
    // index.htmlを読み込む
    fs.readFile(__dirname + '/index.html', { encoding: 'utf8' }, function(
      err,
      html
    ) {
      // コールバックでエラーとhtmlを渡す
      // ファイルの読み込みに失敗したらエラーのレスポンスを返す
      if (err) {
        res.statusCode = 500;
        res.end('Error!');
      }
      // ファイルの読み込みが成功したらHTMLを返す
      else {
        // resで渡せる
        res.setHeader('Content-Type', 'text/html');
        res.end(html);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found!!');
  }
});

// localhostの8000番ポートでサーバーを起動する
server.listen(8000);
