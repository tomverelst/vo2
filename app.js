var express = require('express');
var VO2 = require("./lib/VO2/VO2.js");
var logger = require("./log");

var app = express();

app.get('/vo2max', function(req, res){
    var time = req.param("time");
    var distance = req.param("distance");

    logger.info({"time":time, "distance":distance});

    var max = VO2.max(time, distance);

    res.writeHead(200);
    res.write(JSON.stringify(result));
    res.end();
});

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('VO2 REST service listening at http://%s:%s', host, port)

});

module.exports = app;
