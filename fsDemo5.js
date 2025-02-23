/**
 * 文件的批量重命名, code/ 目录下的
 */

const fs = require('fs')

// 读取 code 的文件夹
const files = fs.readdirSync('./code');
console.log(files)

// 遍历
files.forEach(item => {
    // 拆分文件名
    let data = item.split('-');
    console.log(data)
    let [num, name] = data;
    
    // 判断
    if(Number(num) < 10) {
        num = '0' + num;
    }

    // 创建新的文件名
    let newName = num + '-' + name;
    console.log(newName);

    // rename
    fs.renameSync(`./code/${item}`, `./code/${newName}`);
})

