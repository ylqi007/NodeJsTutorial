// 1. 导入 fs 模块
const fs = require('fs')


// 相对路径
// fs.writeFileSync('./index.html', 'love')
// fs.writeFileSync('index.html', 'love')


// 绝对路径, start with /
// fs.writeFileSync('/Users/ylqi007/Work/NodeJs/NodeJsTutorial/index2.html', 'LOVE')


// fs 相对路径中的 Bug
// fs 相对路径的参照物：命令行的工作目录
// fs.writeFileSync('./index.html', 'love love')


// 使用绝对路径 __dirname, '全局变量'，保存的是所在文件的所在目录的绝对路径
// 所以实战中通常会加上 __dirname 避免相对/绝对路径的问题
console.log(__dirname); // fsDemo4.js 所在目录的绝对路径 /Users/ylqi007/Work/NodeJs/NodeJsTutorial
fs.writeFileSync(__dirname + '/index.html', '__dirname + index.html')