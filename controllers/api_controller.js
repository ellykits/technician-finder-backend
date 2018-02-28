//Modules
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Use bluebird promise
mongoose.Promise = require('bluebird');


//Connect to database, create schema then develop a model

//mongoose.connect("mongodb://*admin#:*123*admin#@ds163010.mlab.com:63010/services_db");//I use this to connect to the online MLAB shared database
mongoose.connect("mongodb://127.0.0.1:27017/");
//Develop a schema as a blue print for the database


module.exports = function (app){
  app.get('/todo',function (req,res){

  })
  app.post('/todo',urlEncodedParser,function (req,res){

  })
  app.delete('/todo/:item',function (req,res){

  })

}
