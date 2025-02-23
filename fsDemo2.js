const fs = require('fs')

/**
 * 文件移动和重命名
 */
// 文件重命名
// fs.rename('./座右铭.txt', './论语.txt', err => {
//     if(err) {
//         console.log('重命名失败');
//         return;
//     }
//     console.log('重命名成功');
// })

// 文件的移动
// fs.rename('./test.txt', './resources/test.txt', err => {
//     if(err) {
//         console.log('文件移动失败');
//         return;
//     }
//     console.log('文件移动成功')
// })


/**
 * 文件删除: 
 * unlink，unlinkSync
 * rm, rmSync (since 14.4)
 */
// fs.unlink('./读书有感.txt', err => {
//     if(err) {
//         console.log('文件删除失败');
//         return;
//     }
//     console.log('文件删除成功')
// })

// fs.unlink('./论语.txt', err => {
//     if(err) {
//         console.log('文件删除失败');
//         return;
//     }
//     console.log('文件删除成功')
// })


/**
 * 文件夹操作：创建、读取、删除
 */
// 创建
// fs.mkdir('./html', err => {
//     if(err) {
//         console.log('失败');
//         return;
//     }
//     console.log('成功');
// })

// 递归创建
// fs.mkdir('./a/b/c', {recursive: true}, err => {
//     if(err) {
//         console.log('失败');
//         return;
//     }
//     console.log('成功');
// })

// 读取文件夹
// fs.readdir('./resources', (err, data) => {
//     if(err) {
//         console.log('fail');
//         return;
//     }
//     console.log('success');
// });

// fs.readdir('./', (err, data) => {
//     if(err) {
//         console.log('fail');
//         return;
//     }
//     console.log(data);
//     console.log('success');
// });


// 删除文件夹
// fs.rmdir('./html', err => {
//     if(err) {
//         console.log('删除失败');
//         return;
//     }
//     console.log('Success');
// })

// 递归删除, 不推荐使用
// DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
fs.rmdir('./a', {recursive: true}, err => {
    if(err) {
        console.log(err);
        console.log('删除失败');
        return;
    }
    console.log('Success');
})
