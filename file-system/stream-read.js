const fs = require('fs');
const path = require('path');

let data = '';
const reader = fs.createReadStream(path.join(__dirname, 'test.txt'), 'utf-8');
reader.on('data', chunk => {
  data += chunk;
});

reader.on('end', () => {
  console.log(data);
});

reader.resume();
