
var express = require('express');
var app = express();

// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


//console.log("Hello world");



/*app.get("/", function(req, res){
    res.sendfile(__dirname + '/views/index.html');
  });*/

//  app.use(express.static(__dirname + '/public'));


/** app.get("/json",function(req, res){
  if(process.env.MESSAGE_STYLE=="uppercase"){
    res.json({"message": "HELLO JSON"});
  }
  res.json({"message": "Hello json"});
}); */


/** 
app.get('/json', function(req, res, next){
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
}); */


/** 
app.get('/now', function (req, res, next){
  req.time=new Date().toString();
  next();
},
function(req,res){
  res.send({time:req.time});
}); */



/** 9)  Get input from client - Route parameters */
app.get('/:word/echo',function(req, res, next){
  req.params.word;
  next();
},
  function(req,res){
    res.send({echo: word});
  
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>

  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
