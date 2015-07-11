var express = require("express");
var mongoose = require("mongoose");
var config = require('./config/config');
var bodyParser = require("body-parser");
var api = require('./api/api');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));

var dbUrl = config.base + config.user+":"+config.psw+config.uri;

mongoose.connect(dbUrl,function(err){
	if(err) console.log(err);
	console.log('connected');
});


app.get('/restaurants', api.restaurants);

app.get('/restaurants/:id',api.restaurants_id);

app.get('/restaurants/:id/:cat', api.restaurants_id_cat);

app.get('/get_token', api.get_token);

app.post('/checkout', api.checkout);

var server = app.listen(3000);