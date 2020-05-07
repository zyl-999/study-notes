// 模拟在8000端口 监听服务端请求，解析出请求的pathname（请求路径）和query（由请求参数得到的参数对象）！
// 将pathsname 和 query 交给 urlMapping 处理，拿到处理结果后，根据结果给出响应。
const http = require('http')// node自带模块
const url = require('url')// node自带模块 
const urlMapping = require('./urlMapping')
http.createServer(function (request, response) {
    // 下面要根据请求路径 调用不同的方法，传入参数
    let {pathname,query} = url.parse(request.url, true)//true:解析成对象
    request.on('data',data=>{
        console.log('=========',data)
    })



    let data 
    try {        
        data = urlMapping(request.method,pathname,query)    //请求参数
    } catch (error) {
        console.warn(error)
        console.warn('异常被捕获，不会退出程序')
        // throw e rror
    }
  
    // 
    response.setHeader('Content-Type', '*/*;charset=utf-8');
    response.setHeader('Access-Control-Allow-Origin', '*')
    if (data) {
        response.write(JSON.stringify(data), 'binary')
        response.end()
    } else {
        response.writeHead(404, 'not found')
        response.end()
    }

}).listen(8000)
console.log('start up success! http://127.0.0.1:8000')
