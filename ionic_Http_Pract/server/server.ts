///<reference path="./../typings/tsd.d.ts"/>

import express = require('express');
import path = require('path');
import bodyparser = require('body-parser');
import session = require('express-session');

var port = process.env.PORT|3000;   //Specifying port.

var app:express.Express = express();

app.set('views','./www');

//static file server.
app.use(express.static(path.join(__dirname,'www')));

app.use('/getthis',function(req,res,next)
{
    console.log("You are good to get!");
    next("Error if you don't get it >_^");
})

app.get('/getthis',function(req,res)
{
    console.log("Got what i wanted");
})

