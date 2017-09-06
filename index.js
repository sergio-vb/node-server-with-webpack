const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
//const socketIo = require('socket.io');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config.js');

const app = express(); //Creating an instance of express

/* Optional: Use this if you want to use socket.io
const server = http.createServer(app);
const io = socketIo(server);*/


/* ----- Middlewares for express, called on every request that comes in */
app.use(express.static(__dirname + '/public')); //Serves static files out of a directory
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.use(bodyParser.urlencoded({extended: false}));


app.listen(3000);
//Important!: use server.listen instead to use socketIo, 
//otherwise it won't get connected