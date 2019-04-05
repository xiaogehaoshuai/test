const mysql= require('mysql');
const express=require('express')
const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'manage'
});
const app=express();
connection.connect();


app.listen(80,function(){
    console.log("success");
})