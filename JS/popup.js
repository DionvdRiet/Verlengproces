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