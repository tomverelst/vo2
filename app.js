var express = require('express');
var VO2 = require("./lib/VO2/VO2.js");
var logger = require("./log");
var math = require("mathjs");

var app = express();

app.get('/vo2/max', function(req, res){
    var time = parseInt(req.param("time"));
    var distance = parseInt(req.param("distance"));

    logger.info({"time":time, "distance":distance});

    var max = VO2.max(time, distance);

    res.writeHead(200);
    res.write(JSON.stringify({"vo2max": math.format(max, {notation: 'fixed', precision: 2})}));
    res.end();
});

//var server = app.listen(3000, function () {
//
//    var host = server.address().address;
//    var port = server.address().port;
//
//    console.log('VO2 REST service listening at http://%s:%s', host, port)
//
//});

module.exports = app;
