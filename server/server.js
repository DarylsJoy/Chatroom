var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var cors = require('cors');
var logger = require('morgan');
var ejs = require('ejs');
var errorHandler = require('errorhandler');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
require('babel-register')
var webpackDevConfig = require('../webpack.config.js');
var compiler = webpack(webpackDevConfig);

var app = express();
process.env.NODE_ENV = 'development';

/**
 * Normalize port.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);
  if (isNaN(port)) {
    // 命名管道
    return val;
  }
  if (port >= 0) {
    // 端口号
    return port;
  }
  return false;
}

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/chat');
app.set('port', normalizePort(process.env.PORT || '3000'));
app.use(cors());
/**
 * 加载路由
 */
// 在线用户列表
var onlineUsers = [{
  username: '图灵机器人',
  signature: '图灵机器人聊天API',
  avatar: 'http://7xnpxz.com1.z0.glb.clouddn.com/robot.png',
  msg: []
}];
var usersRouter = express.Router();
var groupRouter = express.Router();
require('./routes/group')(groupRouter);
require('./routes/user')(usersRouter, onlineUsers);
app.use(usersRouter);
app.use(groupRouter);

app.get('/', function (req, res) {
  res.json({
    success: '1',
    msg: '访问成功'
  })
});

// socket
var sockets = {};
var server = require('http').Server(app);
var io = require('socket.io')(server);
require('./socketEvents')(io, sockets, onlineUsers);
server.listen(app.get('port'), function () {
  console.log('Server runing at port:' + app.get('port'));
});
server.on('error', onError);
server.on('listening', onListening);

// app.listen(app.get('port'), function () {
//   console.log('done')
// });

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  console.log('Listening on ' + bind);
}