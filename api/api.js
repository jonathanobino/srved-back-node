var mongoose = require('mongoose');
var braintree = require("braintree");
var Restaurant = mongoose.model('Restaurant', require('../models/restaurant'));
var sendgrid = require('sendgrid')("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")


var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "w7j5nsd5tjh8mkv7",
  publicKey: "gcdb6pyrgzm46mvh",
  privateKey: "ab0018a215b1c1cb18d94c1d84c78098"
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
	}

	checkout: function(req,res){

		//var customer_email = req.body.customer_email;

		var nonce = req.body.payment_method_nonce;
		// var customer = new sendgrid.Email();

		// //customer.addTo(customer_email);
		// customer.addTo("jonobin@gmail.com");
		// customer.setFrom("srved@srved.com");
		// customer.setSubject("Test Mail customer");
		// customer.setHtml("Test Mail customer");

		// var bookmark = new sendgrid.Email();
		// bookmark.addTo("signorettif@gmail.com");
		// bookmark.setFrom("srved@srved.com");
		// bookmark.setSubject("Test Mail restaurant");
		// bookmark.setHtml("Test Mail restaurant");

	

		var nonce = req.body.payment_method_nonce;
		console.log(req.body);

		var merchantAccountParams = {
		individual: {
		  firstName: "Jane",
		  lastName: "Doe",
		  email: "jane@14ladders.com",
		  phone: "5553334444",
		  dateOfBirth: "1981-11-19",
		  address: {
		    streetAddress: "111 Main St",
		    locality: "Chicago",
		    region: "IL",
		    postalCode: "60622"
		  }
		},
		funding: {
		  destination: braintree.MerchantAccount.FundingDestination.Email,
		  email: "jane@14ladders.com"
		},
		tosAccepted: true,
		masterMerchantAccountId: "signofactory"
		};

		gateway.merchantAccount.create(merchantAccountParams, function (err, result) {
			var account = result.merchantAccount.id;
			gateway.transaction.sale({
				amount: '20.00',
				merchantAccountId: account,
				paymentMethodNonce: nonce
			}, function (err, result) {
				res.send(result);
			});
		});

		


		// gateway.transaction.sale({
		//   amount: '10.00',
		//   paymentMethodNonce: nonce
		// }, function (err, result) {
		// 	if(err){
		// 		res.send(err);
		// 	} else {
		// 		sendgrid.send(customer, function(err,json){
		// 			if(err) console.log(err);
		// 		});
		// 		sendgrid.send(bookmark, function(err,json){
		// 			if(err) console.log(err);
		// 		});
		// 		res.send(result);
		// 	}		
		// });
	}
}

module.exports= api;