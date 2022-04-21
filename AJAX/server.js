// 引入express
const express = require('express');
// 创建对象
const app = express();
// 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文封装
app.get('/json-server', (request, response) => {
    {
        // 设置响应头,设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        const data={
            name:'huang'
        }
        // 设置响应
        response.send(data);
    }
});
app.get('/server', (request, response) => {
    {
        // 设置响应头,设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        const data={
            name:'huang'
        }
        // 设置响应
        response.send(data);
    }
});
app.get('/ie', (request, response) => {
    {
        // 设置响应头,设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        const data={
            name:'huang'
        }
        // 设置响应
        response.send(data);
    }
});
app.post('/server', (request, response) => {
    {
        // 设置响应头,设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        // 设置响应
        response.send('HELLO EXPRESS');
    }
});
// 监听端口启动
app.listen(8000, () => {
    console.log('服务已启动，8000端口监听');
});