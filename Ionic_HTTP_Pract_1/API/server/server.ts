///<reference path="./../typings/tsd.d.ts"/>

import express = require('express');
import path = require('path');
import bodyparser = require('body-parser');
import session = require('express-session');

var port = process.env.PORT|3000;   //Specifying port.

var app:express.Express = express();

var server = app.listen(port,function()
{
    var listening_port = server.address().port;
    console.log(`Listening on: ${listening_port}`);
})

//Data
var data_JSON : Array<{}> = [{id:1,codeName:"Batman"},{id:2,codeName:"Superman"},{id:3,codeName:"The Flash"}];

app.set('views','./www');

//static file server.
app.use(express.static(path.join(__dirname,'Ionic2_HTTP/www')));

app.use('/getthis',function(req,res,next)
{
    console.log("You are good to get!");
    next("Error if you don't get it >_^");
})

app.get('/getthis',function(req,res)
{
    console.log("Data List:");
    console.log(data_JSON);
    res.json(data_JSON);
})

/*app.get('/posts',function(req,res)
{
    console.log(res.title);
})*/