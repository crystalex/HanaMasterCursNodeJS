"use strict";

console.log("x");

var express = require('express');
var mongo = require('mongodb');
var uuidv4 = require('uuid/v4');

var mProducts = require('./modules/products');
var mOrders = require('./modules/orders');

var app = express();

// products related requests
//update
{
app.post('/Products', function (req, res) {
    res.end();
});
// get list
app.get('/Products', function (req, res) {
    res.end();
//res.send('Hello World!')
});
//create
app.put('/Products', function (req, res) {
    res.end();
});
//delete
app.delete('/Products', function (req, res) {
    res.end();
});
}
// orders related requests
//update
{
app.post('/Orders', function (req, res) {
    res.end();
});
// get list
app.get('/Orders', function (req, res) {
    res.end();
//  res.send('Hello World!')
});
//create
app.put('/Products', function (req, res) {
    res.end();
});
//delete
app.delete('/Products', function (req, res) {
    res.end();
});
}
//app start listen
app.listen(3000, function () {
  console.log('Mongo Rest API listening on port 3000!')
});

