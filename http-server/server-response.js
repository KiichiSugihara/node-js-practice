const http = require('http');

// HTTPサーバーのオブジェクトを作成
const server = http.createServer(function(req, res) {
  if (req.url === '/') {
    res.end('index page!\n');
  } else if (req.url === '/list') {
    res.end('list page!\n');
  } else {
    res.statusCode = 404;
    res.end('Not Found!!\n');
  }
});

// localhostの8000番ポートでサーバーを起動する
server.listen(8000);
