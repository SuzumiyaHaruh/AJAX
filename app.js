// 引入express
const express = require('express');
const {request, response} = require("express");
// 创建对象
const app = express();
// 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文封装
app.get('/', (request, response) => {
    {
        response.send('HELLO EXPRESS');
    }
});
// 监听端口启动
app.listen(8000, () => {
    console.log('服务已启动，8000端口监听');
});