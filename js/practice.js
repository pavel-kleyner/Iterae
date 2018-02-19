var tempo = 90;
var currSelScale = document.getElementsByClassName("selected")[0];
var currSelLevel = document.getElementsByClassName("selected-level")[0];

function init() {
	document.getElementById("bpm").value = tempo.toString();
};


init();

function switchScales(){
		int = document.getElementById("intermediate-scale-container");
		beg = document.getElementById("beginner-scale-container");
		int.style.visibility = "visible";
		beg.style.visibility = "hidden";
		currSelLevel = int;
		currSelScale = document.getElementsByClassName
		console.log('beg ' + beg.className);
		console.log('int ' + int.className);

		console.log('beg' + beg.style.visibility);
		console.log('int' + int.style.visibility);
	};



// make selected a global var
