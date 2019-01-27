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

function tekstPop1(){
		document.getElementById('pop1').style.color = "#00AEEF";
		// document.getElementById('pop1').style.fontSize = "180%";
}

function tekstPop2(){
		document.getElementById('pop2').style.color = "#00AEEF";
		// document.getElementById('pop2').style.fontSize = "180%";
}

function tekstPop3(){
		document.getElementById('pop3').style.color = "#00AEEF";
		// document.getElementById('pop3').style.fontSize = "180%";
}


function tekstDown(){
		document.getElementById('pop1').style.color = "black";
		document.getElementById('pop2').style.color = "black";
		document.getElementById('pop3').style.color = "black";
		document.getElementById('pop1').style.fontSize = "150%";
		document.getElementById('pop2').style.fontSize = "150%";
		document.getElementById('pop3').style.fontSize = "150%";
}

function popdown(){
	document.getElementById('popup').style.opacity = "0";
	document.getElementById('popup').style.display = "block";
	document.getElementById('blur').style.filter = "blur(0px)";
	document.getElementById('blur').style.transition = "filter 0.5s";
}

function gekozen1(){
	document.getElementById('popup').style.opacity = "0";
	document.getElementById('popup').style.display = "none";
	document.getElementById('blur').style.filter = "blur(0px)";
	document.getElementById('blur').style.transition = "filter 0.5s";
	document.getElementById('vergelijk-telefoon-3').style.backgroundImage = "url('Afbeeldingen/Toestellen/p10.jpg')";
	document.getElementById('vergelijk-telefoon-3').style.display = "block";
	document.getElementById('kiestelefoon3').style.display = "block";
	document.getElementById('ananas-tekst').innerHTML = "Zoveel keuze, ik zou het niet weten hoor!";
	document.getElementById('plus').style.display = "none";
	document.getElementById('abonnement').innerHTML = "<tr><th id='onderwerp'>Abonnement</th><th class='vergelijk-toestel-naam'>Samsung Galaxy S7</th><th class='vergelijk-toestel-naam'>Samsung Galaxy S8</th> <th class='vergelijk-toestel-naam'>Huawei P10</th></tr><tr><td id='wat'>Belminuten/sms</td><td>100</td><td>300</td><td>500</td></tr><tr><td id='wat'>Internet</td><td>1000 mb</td><td>2000 mb</td><td>2000mb</td></tr><tr><td id='wat'>Prijs</td><td>€16,00 per maand</td><td>€18,00 per maand</td><td>€20,00 per maand</td></tr><tr><td id='wat'>Toestelprijs</td><td>€0,00 per maand</td><td>€0,00 per maand</td><td>€0,00 per maand</td></tr>"
	document.getElementById('algemeen').innerHTML = "<tr><th id='onderwerp'>Algemeen</th><th></th><th></th></tr><tr><td id='wat'>DUal SIM</td><td>Nee</td><td>Ja</td><td>Ja</td></tr><tr><td id='wat'>Type simkaart</td><td>nanoSIM</td><td>nanoSIM</td><td>nanoSIM</td></tr><tr><td id='wat'>Mobiel</td><td>3G, 4G</td><td>3G, 4G</td><td>3G, 4G</td></tr><tr><td id='wat'>"
	document.getElementById('display').innerHTML = "<tr><th id='onderwerp'>Display</th><th></th><th></th></tr><tr><td id='wat'>Type beeldsherm</td><td>SAMOLED</td><td>SAMOLED</td><td>IPS</td></tr><tr><td id='wat'>Schermgrootte</td><td>5,1 inch</td><td>5,8 inch</td><td>5,6 inch</td></tr><tr><td id='wat'>Schermresolutie</td><td>2560 x 1440</td><td>2960 x 1440</td><td>2640 x 1440</td></tr><tr><td id='wat'>Pixeldichtheid</td><td>520 ppi</td><td>570 ppi</td><td>490 ppi</td></tr><tr><td id='wat'>Aantal kleuren</td><td>16.780.000</td><td>16.780.000</td><td>16.780.000</td></tr>"
	document.getElementById('prestaties').innerHTML = "<tr><th id='onderwerp'>Prestaties</th><th></th><th></th></tr><tr><td id='wat'>Processor</td><td>Snapdragon 720</td><td>Snapdragon 820</td><td>Snapdragon 760</td></tr><tr><td id='wat'>Processor snelheid</td><td>2.3 Ghz.</td><td>2.3 Ghz.</td><td>2.3 Ghz.</td></tr><tr><td id='wat'>RAM</td><td>4GB</td><td>4GB</td><td>3GB</td></tr><tr><td id='wat'>"
	document.getElementById('vergelijk-telefoon-1').style.backgroundPosition = "left";
	document.getElementById('kiestelefoon3').value = "KIES DE HUAWEI P10";
	// document.getElementById('vergelijk-telefoon-1').style.backgroundSize = "70%";
	document.getElementById('vergelijk-telefoon-2').style.backgroundPosition = "left";
	document.getElementById('vergelijk-telefoon-2').style.backgroundSize = "55%";
	document.getElementById('vergelijk-telefoon-3').style.backgroundPosition = "left";
	// document.getElementById('vergelijk-lijst').style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
	document.getElementById('vergelijk-lijst').style.backgroundColor = "blue";
}

function gekozen2(){
	document.getElementById('popup').style.opacity = "0";
	document.getElementById('popup').style.display = "none";
	document.getElementById('blur').style.filter = "blur(0px)";
	document.getElementById('blur').style.transition = "filter 0.5s";
	document.getElementById('vergelijk-telefoon-3').style.backgroundImage = "url('Afbeeldingen/Toestellen/6s.gif')";
	document.getElementById('vergelijk-telefoon-3').style.display = "block";
	document.getElementById('kiestelefoon3').style.display = "block";
	document.getElementById('ananas-tekst').innerHTML = "Zoveel keuze, ik zou het niet weten hoor!";
	document.getElementById('plus').style.display = "none";
	document.getElementById('abonnement').innerHTML = "<tr><th id='onderwerp'>Abonnement</th><th class='vergelijk-toestel-naam'>Samsung Galaxy S7</th><th class='vergelijk-toestel-naam'>Samsung Galaxy S8</th> <th class='vergelijk-toestel-naam'>iPhone 6s</th></tr><tr><td id='wat'>Belminuten/sms</td><td>100</td><td>300</td><td>500</td></tr><tr><td id='wat'>Internet</td><td>1000 mb</td><td>2000 mb</td><td>2000mb</td></tr><tr><td id='wat'>Prijs</td><td>€16,00 per maand</td><td>€18,00 per maand</td><td>€20,00 per maand</td></tr><tr><td id='wat'>Toestelprijs</td><td>€0,00 per maand</td><td>€0,00 per maand</td><td>€0,00 per maand</td></tr>"
	document.getElementById('algemeen').innerHTML = "<tr><th id='onderwerp'>Algemeen</th><th></th><th></th></tr><tr><td id='wat'>DUal SIM</td><td>Nee</td><td>Ja</td><td>Ja</td></tr><tr><td id='wat'>Type simkaart</td><td>nanoSIM</td><td>nanoSIM</td><td>nanoSIM</td></tr><tr><td id='wat'>Mobiel</td><td>3G, 4G</td><td>3G, 4G</td><td>3G, 4G</td></tr><tr><td id='wat'>"
	document.getElementById('display').innerHTML = "<tr><th id='onderwerp'>Display</th><th></th><th></th></tr><tr><td id='wat'>Type beeldsherm</td><td>SAMOLED</td><td>SAMOLED</td><td>IPS</td></tr><tr><td id='wat'>Schermgrootte</td><td>5,1 inch</td><td>5,8 inch</td><td>5,6 inch</td></tr><tr><td id='wat'>Schermresolutie</td><td>2560 x 1440</td><td>2960 x 1440</td><td>2640 x 1440</td></tr><tr><td id='wat'>Pixeldichtheid</td><td>520 ppi</td><td>570 ppi</td><td>490 ppi</td></tr><tr><td id='wat'>Aantal kleuren</td><td>16.780.000</td><td>16.780.000</td><td>16.780.000</td></tr>"
	document.getElementById('prestaties').innerHTML = "<tr><th id='onderwerp'>Prestaties</th><th></th><th></th></tr><tr><td id='wat'>Processor</td><td>Snapdragon 720</td><td>Snapdragon 820</td><td>Snapdragon 760</td></tr><tr><td id='wat'>Processor snelheid</td><td>2.3 Ghz.</td><td>2.3 Ghz.</td><td>2.3 Ghz.</td></tr><tr><td id='wat'>RAM</td><td>4GB</td><td>4GB</td><td>3GB</td></tr><tr><td id='wat'>"
	document.getElementById('vergelijk-telefoon-1').style.backgroundPosition = "left";
	document.getElementById('kiestelefoon3').value = "KIES DE IPHONE 6S";
	document.getElementById('vergelijk-telefoon-2').style.backgroundPosition = "left";
	document.getElementById('vergelijk-telefoon-2').style.backgroundSize = "55%";
	document.getElementById('vergelijk-telefoon-3').style.backgroundPosition = "left";
	document.getElementById('vergelijk-lijst').style.backgroundColor = "blue";
}

function gekozen3(){
	document.getElementById('popup').style.opacity = "0";
	document.getElementById('popup').style.display = "none";
	document.getElementById('blur').style.filter = "blur(0px)";
	document.getElementById('blur').style.transition = "filter 0.5s";
	document.getElementById('vergelijk-telefoon-3').style.display = "block";
	document.getElementById('vergelijk-telefoon-3').style.backgroundImage = "url('Afbeeldingen/Toestellen/iphone7.png')";
	document.getElementById('kiestelefoon3').style.display = "block";
	document.getElementById('ananas-tekst').innerHTML = "Zoveel keuze, ik zou het niet weten hoor!";
	document.getElementById('plus').style.display = "none";
	document.getElementById('abonnement').innerHTML = "<tr><th id='onderwerp'>Abonnement</th><th class='vergelijk-toestel-naam'>Samsung Galaxy S7</th><th class='vergelijk-toestel-naam'>Samsung Galaxy S8</th> <th class='vergelijk-toestel-naam'>iPhone 7</th></tr><tr><td id='wat'>Belminuten/sms</td><td>100</td><td>300</td><td>500</td></tr><tr><td id='wat'>Internet</td><td>1000 mb</td><td>2000 mb</td><td>2000mb</td></tr><tr><td id='wat'>Prijs</td><td>€16,00 per maand</td><td>€18,00 per maand</td><td>€20,00 per maand</td></tr><tr><td id='wat'>Toestelprijs</td><td>€0,00 per maand</td><td>€0,00 per maand</td><td>€0,00 per maand</td></tr>"
	document.getElementById('algemeen').innerHTML = "<tr><th id='onderwerp'>Algemeen</th><th></th><th></th></tr><tr><td id='wat'>DUal SIM</td><td>Nee</td><td>Ja</td><td>Ja</td></tr><tr><td id='wat'>Type simkaart</td><td>nanoSIM</td><td>nanoSIM</td><td>nanoSIM</td></tr><tr><td id='wat'>Mobiel</td><td>3G, 4G</td><td>3G, 4G</td><td>3G, 4G</td></tr><tr><td id='wat'>"
	document.getElementById('display').innerHTML = "<tr><th id='onderwerp'>Display</th><th></th><th></th></tr><tr><td id='wat'>Type beeldsherm</td><td>SAMOLED</td><td>SAMOLED</td><td>IPS</td></tr><tr><td id='wat'>Schermgrootte</td><td>5,1 inch</td><td>5,8 inch</td><td>5,6 inch</td></tr><tr><td id='wat'>Schermresolutie</td><td>2560 x 1440</td><td>2960 x 1440</td><td>2640 x 1440</td></tr><tr><td id='wat'>Pixeldichtheid</td><td>520 ppi</td><td>570 ppi</td><td>490 ppi</td></tr><tr><td id='wat'>Aantal kleuren</td><td>16.780.000</td><td>16.780.000</td><td>16.780.000</td></tr>"
	document.getElementById('prestaties').innerHTML = "<tr><th id='onderwerp'>Prestaties</th><th></th><th></th></tr><tr><td id='wat'>Processor</td><td>Snapdragon 720</td><td>Snapdragon 820</td><td>Snapdragon 760</td></tr><tr><td id='wat'>Processor snelheid</td><td>2.3 Ghz.</td><td>2.3 Ghz.</td><td>2.3 Ghz.</td></tr><tr><td id='wat'>RAM</td><td>4GB</td><td>4GB</td><td>3GB</td></tr><tr><td id='wat'>"
	document.getElementById('vergelijk-telefoon-1').style.backgroundPosition = "left";
	// document.getElementById('vergelijk-telefoon-1').style.backgroundSize = "70%";
	document.getElementById('vergelijk-telefoon-2').style.backgroundPosition = "left";
	document.getElementById('vergelijk-telefoon-2').style.backgroundSize = "55%";
	document.getElementById('vergelijk-telefoon-3').style.backgroundPosition = "left";
	// document.getElementById('vergelijk-lijst').style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
	document.getElementById('vergelijk-lijst').style.backgroundColor = "blue";
}