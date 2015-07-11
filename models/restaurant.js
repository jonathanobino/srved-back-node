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
	category:[{
		name: String
	}],
	menu:{
		sides:[dish],
		firsts:[dish],
		seconds:[dish],
		starters:[dish],
		desserts:[dish]
	}
});

module.exports = restaurantSchema; 

