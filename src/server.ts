import express from 'express';
import cors from 'cors';

const app = express()
// const port = process.env.PORT || 300;

// const corsOptions = {
//   origin: 'http://localhost:3000', 
//   credentials: true, 
//   optionsSuccessStatus: 200 
// }
//app.use(cors(corsOptions));

app.use(cors());

// var app = express();
// app.use(function(req, res, next){
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//     } 
// );