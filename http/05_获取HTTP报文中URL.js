// 导入 http 模块
const http = require('http');
const url = require('url')


// 1. 创建服务对象
const server = http.createServer((request, response) => {
    console.log(request.url);

    // let res = url.parse(request.url);
    let res = url.parse(request.url, true);
    console.log(res);

    response.end('Hello URL');
});

// 3. 监听端口，启动服务
server.listen(9000, () => {
    console.log("Service started");
});
