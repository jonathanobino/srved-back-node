var sendgrid = require('sendgrid')("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");
var html_mail = require('./mail');


module.exports= function(req,res,next){

	var customer = new sendgrid.Email();
		customer.addTo("web-eH2Pay@mail-tester.com");
		customer.setFrom("srved@srved.com");
		customer.setSubject("Test Mail customer");
		customer.setHtml(html_mail);

		var bookmark = new sendgrid.Email();
		bookmark.addTo("signorettif@gmail.com");
		bookmark.setFrom("srved@srved.com");
		bookmark.setSubject("Test Mail restaurant");
		bookmark.setHtml(html_mail);

				sendgrid.send(customer, function(err,json){
					if(err) console.log(err);
				});

}