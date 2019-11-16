const fs = require('fs');
const path = require('path');

const reader = fs.createReadStream(path.join(__dirname, 'test.txt'), 'utf-8');
const writer = fs.createWriteStream(path.join(__dirname, 'pipe.txt'), 'utf-8');
reader.pipe(writer);
reader.resume();
