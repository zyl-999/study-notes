var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')
//本处模拟前端服务器，监听1234端口的请求，并作出响应
var urlencode = require('urlencode');

http.createServer(function (req, res) {    
    let uri = url.parse(req.url, false).pathname
    console.log(uri)
    let p = path.join(__dirname,'..', urlencode.decode(uri))  // url编码 变成 utf-8
    // __dirname 是node的内置变量，表示当前js文件所在的绝对路径
    // windows绝对路径就是从盘符出发  c:/
    // linux 绝对路径就是 / 开头的
    console.log(p)


    fs.readFile(p, 'binary', function (err, data) {//binary:二进制
        if (err) {
            res.writeHead(404, 'not found')
            res.end('<h1>404 Not Found!</h1>')
        } else {
            res.setHeader('Content-Type', '*/*;charset=utf-8');
            res.write(data, 'binary')
            res.end()
        }
    })

}).listen(1234)
console.log('start up success! http://127.0.0.1:1234')