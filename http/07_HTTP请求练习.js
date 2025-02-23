// 1. 导入 http 模块
const http = require('http')

// 2. 创建服务对象
const server = http.createServer((request, response) => {
    // Get Request method
    let {method} = request;

    // Get request URL path
    let {pathname} = new URL(request.url, 'http://127.0.0.1');

    console.log(method);
    console.log(pathname);

    // 判断
    if(method === 'GET' && pathname === '/login') {
        // 登陆
        response.end('Login page');
    } else if(method = 'GET' && pathname === '/reg') {
        response.end('Register page');
    } else {
        response.end('Not Found');
    }

    // response.end('HTTP Request Practice');
});

// 3. 监听端口，启动服务
server.listen(9000, () => {
    console.log('HTTP Request Practice: Server started, listensing on 9000');
});
