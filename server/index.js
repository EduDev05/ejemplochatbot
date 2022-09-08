const { appendFile } = require("fs");

const express = require('express');
const cors = require('cors');
// app.get('/src' (req,res){

// });

// app.listen(300 (), console.log("server start localhost:3000"))


const app = express();

const PORT = process.env.PORT || 3000;


var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');
    if (req.method === "OPTIONS") res.send(200);
    else next();
}

app.get('/', (req, res) =>{
    const root =(<App/>);

    const html =ReactDOM.renderToString(root);
    res.send('html');
});

app.use(cors(allowCrossDomain));