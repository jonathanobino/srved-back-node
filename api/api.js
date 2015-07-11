var mongoose = require('mongoose');
var braintree = require("braintree");
var Restaurant = mongoose.model('Restaurant', require('../models/restaurant'));


var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "dh78rjnkdfz7wjjw",
  publicKey: "xnhtx9z5c5sr2gs2",
  privateKey: "a4d56b5637fffe81a34ac061f18b5a02"
});

var api={
	restaurants: function(req,res){
		Restaurant.find({}).exec(function(err,result){
		if(err) res.send(err);
		res.send(result);
		});
	},
	restaurants_id:function(req,res){
		var id= req.params.id;

		Restaurant.findOne({
			_id:id
		})
		.exec(function(err,result){
			if(err) res.send(err);
			res.send(result);
		});
	},
	restaurants_id_cat: function(req,res){
		var id = req.params.id;
		var cat = req.params.cat;

		Restaurant.findOne({
			_id:id,
		})
		.select("menu")
		.exec(function(err,result){
			if(err) res.send(err);
			res.send(result.menu[cat]);
		});

	},
	// Braintree APIs
	get_token: function(req, res){
		gateway.clientToken.generate({}, function (err, response) {
			if(err) res.send(err);
		    res.send(response.clientToken);
		});
	},
	checkout: function(req,res){
		var nonce = req.body.payment_method_nonce;

		gateway.transaction.sale({
		  amount: '10.00',
		  paymentMethodNonce: nonce
		}, function (err, result) {
			if(err){
				res.send(err);
			} else {
				res.send(result);
			}		
		});
	}
}

module.exports= api;