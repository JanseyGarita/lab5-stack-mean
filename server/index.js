const express = require('express');
const app = express();


//Settings
app.set('port',process.env.PORT || 3000);
//Middlewares

//Routes


app.listen(app.get('port'), ()=>{
    console.log('Server connected on port', app.get('port'));
});