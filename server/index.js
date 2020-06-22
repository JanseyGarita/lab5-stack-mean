const express = require('express');
const morgan = require('morgan');
const { request } = require('express');
const app = express();

//Settings
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes


app.listen(app.get('port'), ()=>{
    console.log('Server connected on port', app.get('port'));
});