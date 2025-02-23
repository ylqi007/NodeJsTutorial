/**
 * 需求：创建一个文件，座右铭.txt，并写入内容，三人行，必有我师焉
 */

// 1. 导入 fs 模块
const fs = require('fs')
const process = require('process')

// 2. 写入文件
// fs.writeFile("./座右铭.txt", "三人行，则必有我师焉", err => {
//     // err: 如果写入失败，err就是错误对象；写入成功，null
//     if(err) {
//         console.log('写入失败');
//         return;
//     }
//     console.log('写入成功');
// });

console.log(1 + 1)


// 同步写入，没有回调函数
fs.writeFileSync('./test.txt', 'test data');    // 主线程会等待IO线程完成后，才会继续往下执行

// 追加写入 appendFile, appendFileSync
// fs.appendFile("./座右铭.txt", '则其善者而从之，其不善者而改之。', err => {
//     // err: 如果写入失败，err就是错误对象；写入成功，null
//     if(err) {
//         console.log('追加写入失败');
//         return;
//     }
//     console.log('追加写入成功');
// })

// fs.appendFileSync('./座右铭.txt', '\r\n温故而知新')
// console.log('追加写入完成');

// writeFile 也可以实现追加写入
// 比如程序日志，用户的访问时间
fs.writeFile('./座右铭.txt', '\nlove, love, love', {flag: 'a'}, err => {
    if(err) {
        console.log('写入失败');
        return;
    }
    console.log('写入成功');
})


// 文件的流式写入
// 1. 创建写入流对象
const ws = fs.createWriteStream('./读书有感.txt')

// 2. write
ws.write('半亩方塘一鉴开\n')
ws.write('天光云影共徘徊\n')
ws.write('问渠那得清如许\n')
ws.write('为有源头活水来\n')

//关闭写入流，表明已没有数据要被写入可写流
ws.end()

/**
 * 程序打开一个文件是需要消耗资源的，流式写入可以减少打开关闭文件的次数。
 * 流式写入方式适用于 大文件写入或者频繁写入的场景，writeFile适合于 写入频率较低的场景
 */

/**
 * 文件写入的场景
 * 1. 下载文件
 * 2. 安装软件
 * 3. 保存程序日志，如 Git
 * 4. 编辑器保存文件
 * 5. 视频录制
 * 。。。
 * 当 需要持久化保存数据 的时候，应该想到 文件写入
 */


/**
 * 文件读取
 */
// 异步读取
// fs.readFile('./读书有感.txt', (err, data) => {
//     if(err) {
//         console.log('读取失败～～');
//         return;
//     }
//     console.log(data.toString());
// })
// console.log('读写完毕');

// 同步读写
let data = fs.readFileSync('./读书有感.txt');
console.log(data.toString())

/**
 * 读取文件的应用场景
 * 1. 电脑开机
 * 2. 程序运行
 * 3. 查看日志
 * 4. git log日志
 * 5. 上传文件
 */
/**
 * 文件的流式读取
 */
// 1. 创建文件读取流对象
// const rs = fs.createReadStream('./resources/fs_demo_video.mp4')

// // 2. 绑定 data 事件
// rs.on('data', chunk => {
//     console.log(chunk.length);  // 65536 字节 ==> 64KB
// });

// // 3. end
// rs.on('end', () => {
//     console.log('读取video完成');
// })


/**
 * 文件复制
 * memoryUsage:
 */
// Method 1. readFile
/*
{
  rss: 80527360,    // 整个占用内存大小，单位字节 80527360B = 80.52736MB
  heapTotal: 5292032,
  heapUsed: 4200592,
  external: 43158105,
  arrayBuffers: 41608868
}
*/
// let data1 = fs.readFileSync('./resources/fs_demo_video.mp4');
// fs.writeFileSync('./resources/fs_demo_video2.mp4', data1);
// console.log(process.memoryUsage())

// Method 2. 流式操作。所占资源更少，更快
/*
{
  rss: 61538304,    61.538304MB
  heapTotal: 6864896,
  heapUsed: 4733360,
  external: 12880473,
  arrayBuffers: 11331236
}
*/
const rs = fs.createReadStream('./resources/fs_demo_video.mp4');
const wr = fs.createWriteStream('./resources/fs_demo_video3.mp4');
// // 绑定 data 事件
// rs.on('data', chunk => {
//     ws.write(chunk)
// })
// rs.on('end', () => {
//     console.log(process.memoryUsage())
// })

// Method 3.
rs.pipe(ws);