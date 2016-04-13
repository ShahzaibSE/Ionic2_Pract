///<reference path="./../typings/tsd.d.ts"/>
"use strict";
var express = require('express');
var port = process.env.PORT | 3000; //Specifying port.
var app = express();
var server = app.listen(port, function () {
    var listening_port = server.address().port;
    console.log("Listening on: " + listening_port);
});
//Data
var data_JSON = [{ id: 1, codeName: "Batman" }, { id: 2, codeName: "Superman" }, { id: 3, codeName: "The Flash" }];
//app.set('views','./www');
//static file server.
//app.use(express.static(path.join(__dirname,'Ionic2_HTTP/www')));
app.use('/getData/:id?', function (req, res, next) {
    if (data_JSON) {
        console.log("Data Found");
        next();
    }
    else {
        console.log("Data not Found");
        next();
    }
});
app.get('/getData/:id?', function (req, res) {
    /*console.log("Data List:");
    console.log(data_JSON);
    res.json(data_JSON);*/
    for (var i = 0; i < data_JSON.length; i++) {
        if (data_JSON[i].id == req.params.id) {
            console.log(data_JSON[i]);
            res.json(data_JSON[i]);
        }
        else {
            console.log("Data Not Found");
        }
    }
});
/*app.get('/posts',function(req,res)
{
    console.log(res.title);
})*/
app.post('/addData', function (req, res) {
    //Just making things a little more interesting.
    data_JSON.push({ id: 4, codeName: "Aquaman" });
    setTimeout(function () {
        console.log("Modified Data JSON:");
        console.log(data_JSON);
        //res.send("Modified Data JSON:");
        res.json(data_JSON);
    }, 2000);
    //Then.
    clearTimeout(1);
});
app.delete('/deleteData/:id', function (req, res) {
    //Deleting data from data_JSON.
    for (var i = 0; i < data_JSON.length; i++) {
        if (data_JSON[i].id == req.params.id) {
            data_JSON.splice(i, 1);
            //res.json(data_JSON);
            console.log({ status: true, message: "Data Deleted" });
            res.json(data_JSON);
            return;
        }
        else {
            //res.json({status:false,message:"Data not found"});  
            console.log({ status: false, message: "Data not found" });
        }
    }
});
app.put('/modifyData/:id', function (req, res) {
    for (var i = 0; i < data_JSON.length; i++) {
        if (data_JSON[i].id == req.params.id) {
            //data_JSON[i].id = 100;
            data_JSON[i].codeName = "Wolverine";
            console.log(data_JSON[i]);
            res.json(data_JSON);
            return;
        }
        else {
            console.log({ status: false, message: "Data not found & not edited" });
        }
    }
});
