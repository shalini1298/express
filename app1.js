var express=require('express');
var path=require('path');
var app=express();
app.get('./',function(req,res) {
    res.sendFile(path.join(__dirname ,'/views/index.html'));
})
app.listen(3000,function(){
    console.log("port is listening to 3000");      //set our messages colour
});