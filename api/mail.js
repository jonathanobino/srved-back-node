

var mail = function(obj){

var text = "<html><head><title>Srved</title></head>"+

	obj.email_rest;
	obj.email_cust;
	obj.nome_cognome;
	obj.nome_rest;
	obj.piatti;

	return text;
}


module.exports= mail;