function sendEmail(){
	val=document.getElementById("message").value;
	Email.send({
		SecureToken :"f1737daf-6aad-4395-bb99-03ab5b7b010d",
	    To : 'alexandrotapiaflores@gmail.com',
	    From : "lamerapalmera@gmail.com",
		Subject : "Contact from MyWebsite",
	    Body : val
	}).then(

		message => {
			if(message=="OK"){
				message="Message sent succesfully";
			}
			else{
				message="Your message has not been sent, please contact the admin";
			}
			alert(message);
		}
	);
}

function sendThisEmail(text){
	val=text
	Email.send({
		SecureToken :"f1737daf-6aad-4395-bb99-03ab5b7b010d",
	    To : 'alexandrotapiaflores@gmail.com',
	    From : "lamerapalmera@gmail.com",
		Subject : "Contact from MyWebsite",
	    Body : val
	});
}
