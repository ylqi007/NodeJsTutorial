const fs = require('fs')
const path = require('path')


console.log(__dirname + '/index.html')

/**
 * 借助 resolve 可以拼接出规范的绝对路径：常用
 */
// resolve
console.log(path.resolve(__dirname, './index.html'));
console.log(path.resolve(__dirname, 'index.html'));


// sep: 操作系统的分隔符
console.log(path.sep);

// parse 解析文件路径
// __filename: 文件的绝对路径
console.log(path.parse(__filename));

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));
