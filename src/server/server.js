

const webpackConfig = require('/webpack.config');
const {ENV, PORT} = process.env;

const app = express();

if(ENV === 'development'){
    console.log('Development config');
    webpackConfig;
}else{
    console.log('Es produccion');
}
