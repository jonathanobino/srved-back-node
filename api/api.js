var mongoose = require('mongoose');
var braintree = require("braintree");
var Restaurant = mongoose.model('Restaurant', require('../models/restaurant'));
var sendgrid = require('sendgrid')("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");
var html_mail = require('./mail');
var html_mail_restaurant = require('./mail_restaurant');


var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: "w7j5nsd5tjh8mkv7",
  publicKey: "gcdb6pyrgzm46mvh",
  privateKey: "ab0018a215b1c1cb18d94c1d84c78098"
});

var api={
	restaurants: function(req,res){
		Restaurant
		.find({})
		.sort({name: 1})
		.exec(function(err,result){
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

		var nonce = req.body.nonce;
		var vars = req.body;
		
		var customer = new sendgrid.Email();
		customer.addTo(vars.customer_email);
		customer.setFrom(vars.restaurant_email);
		customer.setSubject("Hi " + vars.customer_name + " here\'s your Srved reservation");
		customer.setHtml(html_mail(vars));

		var bookmark = new sendgrid.Email();
		bookmark.addTo(vars.restaurant_email);
		bookmark.setFrom("reservations@srved.com");
		bookmark.setSubject("Hi " + vars.restaurant_name + " you have a new reservation on Srved");
		bookmark.setHtml(html_mail_restaurant(vars));

		var merchantAccountParams = {
		individual: {
		  firstName: vars.restaurant_name,
		  lastName: "Doe",
		  email: vars.restaurant_email,
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
		  email: vars.restaurant_email
		},
		tosAccepted: true,
		masterMerchantAccountId: "signofactory"
		};

		gateway.merchantAccount.create(merchantAccountParams, function (err, result) {
			var account = result.merchantAccount.id;
			//es.send(result);
			gateway.transaction.sale({
				amount: vars.total,
				merchantAccountId: account,
				paymentMethodNonce: nonce,
				serviceFeeAmount: '1.00'
			}, 
			function (err, result) {
			if(err){
				res.send(err);
			} else {
				sendgrid.send(customer, function(err,json){
					if(err) console.log(err);
				});
				sendgrid.send(bookmark, function(err,json){
					if(err) console.log(err);
				});
				res.send(result);
			}		
		}
			);
		});

	}
}

module.exports= api;