// 导入 http 模块
const fs = require('fs')
const http = require('http')


// 创建 Server 对象
const server = http.createServer((request, response) => {
    
  let html = fs.readFileSync(__dirname + './test.html');
    response.end(html);
});

// 3. 监听端口，启动服务
server.listen(9000, () => {
    console.log('Set HTTP Response: Server started, listensing on 9000');
});
