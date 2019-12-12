function sendEmail(){
	val=document.getElementById("message").value;
	Email.send({
	    Host : "smtp.elasticemail.com",
	    Username : "taimrt@mail1web.org",
	    Password : "da81942d-a259-4ed2-8730-e804c546ed07",
	    To : 'alexandrotapiaflores@gmail.com',
	    From : "taimrt@mail1web.org",
	    Subject : "Contact from MyWebsite",
	    Body : val
	}).then(
	  message => alert(message)
	);
}
