// 导入 http 模块
const http = require('http');
const url = require('url')


// 1. 创建服务对象
const server = http.createServer((request, response) => {
    console.log(request.url);

    // 实例化 URL 对象
    // let url = new URL('/search?a=1000&b=900', 'http://127.0.0.1:9000');
    let url = new URL(request.url, 'http://127.0.0.1:9000');
    console.log(url);
    console.log(url.pathname);

    // 输出 keyword 查询字符串
    console.log(url.searchParams.get('keyword'));
    
    response.end('Hello URL NEW');
});

// 3. 监听端口，启动服务
server.listen(9000, () => {
    console.log("Service started");
});
