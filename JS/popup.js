function popup(){
	document.getElementById('popup').style.opacity = "1";
	document.getElementById('popup').style.top = "120px";
	// document.getElementById('popup').style.backgroundColor = "red";
	document.getElementById('popup').style.display = "block";
	document.getElementById('blur').style.filter = "blur(10px)";
	document.getElementById('popup').style.height = "600px";
	document.getElementById('popup').style.transition = "height 1s";
	document.getElementById('blur').style.transition = "filter 0.5s";
}

function popdown(){
	document.getElementById('popup').style.opacity = "0";
	document.getElementById('popup').style.display = "block";
	document.getElementById('blur').style.filter = "blur(0px)";
	document.getElementById('blur').style.transition = "filter 0.5s";
}

function gekozen(){
	document.getElementById('popup').style.opacity = "0";
	document.getElementById('popup').style.display = "block";
	document.getElementById('blur').style.filter = "blur(0px)";
	document.getElementById('blur').style.transition = "filter 0.5s";
	document.getElementById('vergelijk-telefoon-3').style.display = "block";
	document.getElementById('kiestelefoon3').style.display = "block";
	document.getElementById('plus').style.display = "none";
	document.getElementById('abonnement').innerHTML = "<tr><th id='onderwerp'>Abonnement</th><th class='vergelijk-toestel-naam'>Huawei P20 lite</th><th class='vergelijk-toestel-naam'>Huawei Mate 20 lite</th> <th class='vergelijk-toestel-naam'>iPhone 7</th></tr><tr><td id='wat'>Belminuten/sms</td><td>100</td><td>300</td><td>500</td></tr><tr><td id='wat'>Internet</td><td>1000 mb</td><td>2000 mb</td><td>2000mb</td></tr><tr><td id='wat'>Prijs</td><td>€16,00 per maand</td><td>€18,00 per maand</td><td>€20,00 per maand</td></tr><tr><td id='wat'>Toestelprijs</td><td>€0,00 per maand</td><td>€0,00 per maand</td><td>€0,00 per maand</td></tr>"
	document.getElementById('algemeen').innerHTML = "<tr><th id='onderwerp'>Abonnement</th><th></th><th></th></tr><tr><td id='wat'>Belminuten/sms</td><td>100</td><td>300</td><td>500</td></tr><tr><td id='wat'>Internet</td><td>1000 mb</td><td>2000 mb</td><td>2000mb</td></tr><tr><td id='wat'>Prijs</td><td>€16,00 per maand</td><td>€18,00 per maand</td><td>€20,00 per maand</td></tr><tr><td id='wat'>Toestelprijs</td><td>€0,00 per maand</td><td>€0,00 per maand</td><td>€0,00 per maand</td></tr>"
	document.getElementById('display').innerHTML = "<tr><th id='onderwerp'>Abonnement</th><th></th><th></th></tr><tr><td id='wat'>Belminuten/sms</td><td>100</td><td>300</td><td>500</td></tr><tr><td id='wat'>Internet</td><td>1000 mb</td><td>2000 mb</td><td>2000mb</td></tr><tr><td id='wat'>Prijs</td><td>€16,00 per maand</td><td>€18,00 per maand</td><td>€20,00 per maand</td></tr><tr><td id='wat'>Toestelprijs</td><td>€0,00 per maand</td><td>€0,00 per maand</td><td>€0,00 per maand</td></tr>"
	document.getElementById('prestaties').innerHTML = "<tr><th id='onderwerp'>Abonnement</th><th></th><th></th></tr><tr><td id='wat'>Belminuten/sms</td><td>100</td><td>300</td><td>500</td></tr><tr><td id='wat'>Internet</td><td>1000 mb</td><td>2000 mb</td><td>2000mb</td></tr><tr><td id='wat'>Prijs</td><td>€16,00 per maand</td><td>€18,00 per maand</td><td>€20,00 per maand</td></tr><tr><td id='wat'>Toestelprijs</td><td>€0,00 per maand</td><td>€0,00 per maand</td><td>€0,00 per maand</td></tr>"
	document.getElementById('vergelijk-telefoon-1').style.backgroundPosition = "left";
	document.getElementById('vergelijk-telefoon-2').style.backgroundPosition = "left";
	document.getElementById('vergelijk-telefoon-3').style.backgroundPosition = "left";
	document.getElementById('vergelijk-lijst').style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
	document.getElementById('vergelijk-lijst').style.backgroundColor = "blue";
}