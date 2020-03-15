var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')

var urlencode = require('urlencode');

http.createServer(function (req, res) {
    let uri = url.parse(req.url, false).pathname
    console.log(uri)
    var p = path.join(__dirname, urlencode.decode(uri))
    console.log(p)


    fs.readFile(p, 'binary', function (err, data) {
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
