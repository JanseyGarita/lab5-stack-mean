const express = require('express');
const morgan = require('morgan');
const { request } = require('express');
const app = express();
const { mongoose } = require('./database');

//Settings
app.set('port',process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/api/people',require('./routes/pleople.routes'));

app.listen(app.get('port'), ()=>{
    console.log('Server connected on port', app.get('port'));
});