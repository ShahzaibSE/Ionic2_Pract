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
//var data_JSON : {id:number,codeName:string}[] = [{id:1,codeName:"Batman"},{id:2,codeName:"Superman"},{id:3,codeName:"The Flash"}];

var tasks : {Tid:any,Tname:any}[] = [];

//app.set('views','./www');

//static file server.
app.use(express.static(path.join(__dirname,'./../../ToDoApp/www')));

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.use('/getData/:id?',function(req,res,next)
{
    if(tasks)
    {
        console.log("Data Found");
        next();
    }
    else
    {
        console.log("Data not Found");
        next();
    }
})

app.get('/getData/:id?',function(req,res)
{
    /*console.log("Data List:");
    console.log(data_JSON);
    res.json(data_JSON);*/
    for(var i=0;i<tasks.length;i++)
    {
       if(tasks[i].Tid==req.params.id)
       {
           console.log(tasks[i]);
           res.json(tasks[i]);
       }
       else
       {
           console.log("Data Not Found");
       }
    }
})

/*app.get('/posts',function(req,res)
{
    console.log(res.title);
})*/

app.post('/addData/tasks',function(req,res)
{
    //Just making things a little more interesting.
    //data_JSON.push({id:4,codeName:"Aquaman"});
    
    console.log(req.body);
    var obj = {Tid:req.body.id,Tname:req.body.name};
    tasks.push(obj);
    //setTimeout(()=>
    //{
    console.log("Modified Data JSON:");
    console.log(tasks);
    //res.send("Modified Data JSON:");
    //res.json(data_JSON);},2000);
    //res.json(tasks);
    
    //Then.
    //clearTimeout(1);
})

app.delete('/deleteData/:id',function(req,res)
{
   //Deleting data from data_JSON.
    for(var i=0;i<tasks.length;i++)
    {
        if(tasks[i].Tid == req.params.id)
        {  
          tasks.splice(i,1);
          //res.json(data_JSON);
          console.log({status:true,message:"Data Deleted"});
          res.json(tasks);
          return;
        }
        else
        {
         //res.json({status:false,message:"Data not found"});  
         console.log({status:false,message:"Data not found"}); 
        }
        //res.json(data_JSON);
    }  
  
})

app.put('/modifyData/:id',function(req,res)
{
    for(var i =0 ;i<tasks.length ; i++)
    {
      if(tasks[i].Tid == req.params.id)
      {
        //data_JSON[i].id = 100;
        tasks[i].Tname = req.body.name;
        console.log(tasks[i]);
        res.json(tasks);
        return;
      }
      else
      {
          console.log({status:false,message:"Data not found & not edited"});
      }
    }
})

app.get('/testAPI',function(res)
{
    console.log('Tested');
})
