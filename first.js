var path1=require('path');
var express =require("express")
var app=express();
var exp=require('express')
var app=new exp();
var path=path1.join(__dirname,'../public/css')
console.log(path);
app.use(exp.static(path))
app.use('/form',exp.static(path),function(req,res,next){
    res.sendFile(path+"/index.html")
})
app.listen(3030)