var app = require('express')();
var express = require('express');
var server = require('http').Server(app);
var io = require('socket.io')(server);
var config = require('./library/config.js');
var settings = config.setting(config.env());
server.listen(settings.port);
// WARNING: app.listen(80) will NOT work here!
var bodyparser = require("body-parser");

app.use(express.static(__dirname + '/public'))
var path = require('path');
// view engine setup
app.set('views', path.join(__dirname, '/views/layout'));
app.set('view engine', 'ejs');

var authRoute = require("./route/authentication");
var timelineRoute = require("./route/timeline");
var newfeed = require("./route/newfeed");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.use("/", authRoute);
app.use("/timeline", timelineRoute);
app.use("/newfeed", newfeed);

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});

module.exports = app;