var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value; 


slider.oninput = function() {

    if(output == 599){
	document.getElementById('tekst').innerHTML= "In Stock";
	}

    output.innerHTML = this.value;

}

slider2.oninput = function() {
    output2.innerHTML = this.value;

    if(output2 ==300){
	document.getElementById('tekst2').innerHTML= "In Stock";
	}
}

function changeInputB(x)
{
	// document.getElementById("informatie").style.backgroundColor = "red";

	if (x.value >= 599){
		document.getElementById('tekst').innerHTML= "Onbeperkt belminuten";
	}

	else{
		document.getElementById('tekst').innerHTML= x.value + " belminuten";
	}
}

function changeInputM(y)
{
	// document.getElementById("informatie").style.backgroundColor = "red";

	if (y.value >= 599){
		document.getElementById('tekst2').innerHTML= "Onbeperkt Mb";
	}

	else{
		document.getElementById('tekst2').innerHTML= y.value + " belminuten";
	}
}


