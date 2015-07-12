var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var dish = {
	name: String,
	price: String,
	image: String,
	ingredients: [{
		name: String
	}]
}

var restaurantSchema = new Schema({
	name: String,
	address: String,
	city: String,
	tel: String,
	desc: String,
	email: String,
	imageUrl: String,
	category: String,
	menu:{
		"starters":[dish],
		"first dishes":[dish],
		"second dishes":[dish],
		"sides":[dish],
		"desserts":[dish]
	}
});

module.exports = restaurantSchema; 

