const { response } = require('express');
const express = require('express'); //activation of express module
const server = express(); 
//storing all value of express in server variable
server.get('/',(req,res) => {
    console.log("i am the home route");
    res.send("hello baby");
});
const cart = ["tom","jerry","mike"];

server.get('/123',(req,res) => {
    console.log(" i am from second route");
    res.send("hi mik");
}
) ;//creation of the route

server.get('/cartoon',(req,res) => {
    console.log(" i am from cartoons");
    res.send("<h1> hi baby </h1>");
}); //this is called route handling in which we send data

server.get('*',(req,res) => {
    res.send(404); 
})
//whenever we are making changes in server we have to restar the server
server.listen(7800,() => {
    console.log(" the server with port 7800 is running");
}); // creation of the server

//200 indicates everything is ok
//201 indicates the data is created
//404 server can not be connected