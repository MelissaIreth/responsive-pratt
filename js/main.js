var send = document.getElementById("send");

	send.addEventListener("click",function(){

	var name = document.getElementById("name").value;
	var mail = document.getElementById("mail"). value;
	var msg = document.getElementById("msg").value;

	if(name == ""){
		document.getElementById("error-name").classList.add("has-error");
 	}else if(!(/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,4})$/.test(mail))){
 		document.getElementById("error-mail").classList.add("has-error");
 	}else if(msg == ""){
 		document.getElementById("error-msg").classList.add("has-error");
	}else{
		document.getElementById("name").value ="";
		document.getElementById("mail").value = "";
		document.getElementById("msg").value = "";
		document.getElementById("error-name").classList.remove("has-error");
		document.getElementById("error-mail").classList.remove("has-error");
		document.getElementById("error-msg").classList.remove("has-error");
	}	
});