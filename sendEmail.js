function sendEmail(){
	val=document.getElementById("message").value;
	Email.send({
		Host : "smtp.gmail.com",
	    Username : "lamerapalmera@gmail.com",
	    Password : "elhuevo591",
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
		Host : "smtp.gmail.com",
	    Username : "lamerapalmera@gmail.com",
	    Password : "elhuevo591",
	    To : 'alexandrotapiaflores@gmail.com',
	    From : "lamerapalmera@gmail.com",
		Subject : "Contact from MyWebsite",
	    Body : val
	});
}
