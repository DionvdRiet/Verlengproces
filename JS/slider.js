var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value; 


slider.oninput = function() {
    output.innerHTML = this.value;

    if(output >= 600){
	document.getElementById('tekst').innerHTML= "In Stock";
	}
}

slider2.oninput = function() {
    output2.innerHTML = this.value;

    if(output2 ==300){
	document.getElementById('tekst2').innerHTML= "In Stock";
	}
}


