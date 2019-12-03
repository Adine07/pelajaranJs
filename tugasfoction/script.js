

function bayar() {
	var mk = document.getElementsByClassName('makan');
	var pes = "";
	var min = document.getElementByClassName('byma');
	var total = "";

	for (i = 0; i < 20; i++) {
		if (mk[i].checked === true){
	  		pes += mk[i].value + ",";
		}
	}

	for (i = 0; i < 20; i++) {
		if (mk[i].checked === true){
	  		total += mk[i].value;
		}

		
	}
	  alert("Anda Telah Memesan: " + pes);
}