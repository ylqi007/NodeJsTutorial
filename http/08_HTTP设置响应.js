// 导入 http 模块
const http = require('http')


// 创建 Server 对象
const server = http.createServer((request, response) => {
    // 1. 设置响应行: Start line
    // Set response status code
    response.statusCode = 203;
    response.statusCode = 404;
    // 设置响应状态描述
    response.statusMessage = 'I Love You';

    // 2. 设置响应头: Response headers
    response.setHeader('context-type', 'text/html;charset=utf-8');
    response.setHeader('Server', 'NodeJs');
    response.setHeader('MyHeader', 'TestTest');
    response.setHeader('test', ['a', 'b', 'c']);    // 设置多个重名响应头

    // 3. 设置响应体: Response body
    response.write('LOVE')
    response.write('LOVE')
    response.write('LOVE')
    response.write('LOVE')
    response.write('LOVE')
    
    response.end("Set HTTP Response!");
});

// 3. 监听端口，启动服务
server.listen(9000, () => {
    console.log('Set HTTP Response: Server started, listensing on 9000');
});
