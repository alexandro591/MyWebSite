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

		message => {
			if(message=="OK"){
				message="Message sent succesfully";
			}
			else{
				message="Your message has not been sent, please contact the admin";
			}
			alert(message)
		}
	);
}

function sendThisEmail(text){
	val=text
	Email.send({
		Host : "smtp.elasticemail.com",
	    Username : "taimrt@mail1web.org",
	    Password : "da81942d-a259-4ed2-8730-e804c546ed07",
	    To : 'alexandrotapiaflores@gmail.com',
	    From : "taimrt@mail1web.org",
	    Subject : "Contact from MyWebsite",
	    Body : val
	})
}
