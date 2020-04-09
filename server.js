const express = require("express");
const bodyParser=require("body-parser");
const request =require("request");
const app=express(); 
app.use(bodyParser.urlencoded({extended:true}));
  app.get("/",function(req,res){
      res.sendFile(__dirname+"/bitcoin.html");
  });
app.post("/",function(req,res){     
  var cryp=req.body.crypto;
  var curr=req.body.currency;
  var baseurl= "https://apiv2.bitcoinaverage.com/indices/global/ticker/";
  var finalurl=baseurl +cryp +curr;
  request(finalurl,function( error, response, body)
  {
    var data = JSON.parse(body);
    var price=data.last;
    res.send("<h1>the curent price of "+ crypt+"is"+ price +"</h1>"); 
  });
});
app.listen("3000",()=>{
    console.log("server at port 3000");
});