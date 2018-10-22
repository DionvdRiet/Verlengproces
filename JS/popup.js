function popup(){
	document.getElementById('popup').style.opacity = "0.9";
	document.getElementById('popup').style.top = "150px";
	document.getElementById('popup').style.backgroundColor = "red";
	document.getElementById('popup').style.display = "block";
	document.getElementById('blur').style.filter = "blur(10px)";
	document.getElementById('popup').style.height = "1000px";
	document.getElementById('popup').style.transition = "height 5s";
	document.getElementById('blur').style.transition = "filter 0.5s";
}

function popdown(){
	document.getElementById('popup').style.opacity = "0";
	document.getElementById('popup').style.display = "block";
	document.getElementById('blur').style.filter = "blur(0px)";
	document.getElementById('blur').style.transition = "filter 0.5s";
}