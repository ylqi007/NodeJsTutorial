// 1. 导入 http 模块
const http = require('http')

// 2. 创建服务对象
const server = http.createServer((request, response) => {
    // response.end("Hello HTTP Server");  // 设置响应体
    response.setHeader('content-type', 'text/html;charset=utf-8');

    // 获取请求的方法
    console.log(request.method);
    // 获取请求URL
    console.log(request.url);   // 只包含 url 中的路径与查询字符串
    // 获取 HTTP 协议版本号
    console.log(request.httpVersion);
    // header
    console.log(request.headers);
    console.log(request.headers.host);
    response.end('Hello HTTP');
});

// 3. 监听端口，启动服务
server.listen(9000, () => {
    console.log("Service started");
});
