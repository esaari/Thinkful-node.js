var http = require('http');
var url = require('url');
var items = [];

var mongoose = require('mongoose');

var server = http.createServer(function (req, res) {
    switch (req.method) {
        case 'POST':
            var item = '';
            req.setEncoding('utf8');
            req.on('data', function (chunk) {
                item += chunk;
            });
            req.on('end', function () {
                items.push(item);
                res.end('Item added\n');
            });
            break;
        case 'GET':
            items.forEach(function(item, i) {
                res.write(i + '. ' + item + '\n');
            });
            res.end();
            break;
        case 'DELETE':
            var pathname = url.parse(req.url).pathname;
            var i = parseInt(pathname.slice(1), 10);

            if (isNaN(i)) {
                res.statusCode = 400;
                res.end('Item id not valid');
            }
            else if (!items[i]) {
                res.statusCode = 404;
                res.end('Item not found');
            }
            else {
                items.splice(i, 1);
                res.end('Item deleted successfully');
            }
            break;
        case 'PUT':
            var item = '';
            var pathname = url.parse(req.url).pathname;
            var i = parseInt(pathname.slice(1), 10);
            req.setEncoding('utf8');
            if (isNaN(i)) {
                res.statusCode = 400;
                res.end('Item id not valid');
            }
            else if (!items[i]) {
                res.statusCode = 404;
                res.end('Item not found');
            }
            else {
                req.on('data', function (chunk) {
                    item += chunk;
                });
                req.on('end', function () {
                    items[i] = item;
                    res.end('Item was updated!\n');
                });
            }
            break;
    }
});

server.listen(9000, function(){
    console.log('listening on 9000');
});

mongoose.connect('mongodb://127.0.0.1');

var db = mongoose.connection;
db.on('error', function callback () {
    console.error('connection error');
});
db.once('open', function callback () {
    console.error('connection success');
});