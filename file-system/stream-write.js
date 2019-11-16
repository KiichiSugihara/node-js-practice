const fs = require('fs');
const path = require('path');

const writer = fs.createWriteStream(
  path.join(__dirname, 'created.txt'),
  'utf-8'
);
writer.end('Hello Stream!!');
