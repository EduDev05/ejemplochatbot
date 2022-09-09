const { appendFile } = require("fs");

const express = require('express');
const cors = require('cors');
// app.get('/src' (req,res){

// });

// app.listen(300 (), console.log("server start localhost:3000"))


const app = express();

const PORT = process.env.PORT || 3000;


// var allowCrossDomain = function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');
//     if (req.method === "OPTIONS") res.send(200);
//     else next();
// }

const whitelist =['https://main.dal877ldf6ceo.amplifyapp.com/','https://pruebachat--tecmonterreymxqa.myvtex.com/']
const options = {
    origin: (origin,callback)=>{
        if(whitelist.includes(origin)){
            callback(null,true);
        }else{
            console.log("NO TIENES PERMISOS DE CORS");
            callback(new Error('No permitido'));
        }
        
    }
}
app.get('/', (req, res) =>{
    const root =(<App/>);
    console.log('Si puedo entrar, sin CORS');
    const html =ReactDOM.renderToString(root);
    res.send('html');
});

//app.use(cors(allowCrossDomain));
app.use(cors(options));