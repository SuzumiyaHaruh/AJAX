// 引入express
const express = require('express');
// 创建对象
const app = express();
// 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文封装
// json
app.get('/json-server', (request, response) => {
    {
        // 设置响应头,设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        const data={
            name:'json'
        }
        // 设置响应
        response.send(data);
    }
});
// Get请求向服务器索取数据
app.get('/server', (request, response) => {
    {
        // 设置响应头,设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        // 设置响应
        response.send('HELLO GET');
    }
});
//延时
app.get('/time-server', (request, response) => {
    {
        // 设置响应头,设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        // 加一个定时器用于判断超时
        setTimeout(()=>{
            response.send('delayed response');
        },3000);
    }
});
//针对ie缓存
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
// 可以接收任何类型请求
app.all('/ie', (request, response) => {
    {
        // 设置响应头,设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        // 设置响应
        response.send('HELLO ALL');
    }
});
//Post请求向服务器提交数据
app.post('/server', (request, response) => {
    {
        // 设置响应头,设置允许跨域
        response.setHeader('Access-Control-Allow-Origin', '*');
        // 设置响应
        response.send('HELLO POST');
    }
});
// 监听端口启动
app.listen(8000, () => {
    console.log('服务已启动，8000端口监听');
});