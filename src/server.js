import express from 'express';
import cors from 'cors';

// const app = express()
  // const port = navigator.serial.getPorts()
var app = express();

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    } 
);