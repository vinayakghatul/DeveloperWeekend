var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var request=require('request');



var err="No information available: Please check the details that you have provided";

app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));

var port = process.env.PORT || 5000;


var server=app.listen(process.env.PORT || 5000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });

app.get('/',function(req,res){
	return res.status(200).send("Welcome to DevWeekend Server");
});
