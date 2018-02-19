var tempo = 90;
var currSelScale = document.getElementsByClassName("selected")[0];
var currSelLevel = document.getElementsByClassName("selected-level")[0];

function init() {
	document.getElementById("bpm").value = tempo.toString();
};

sc1 = document.getElementById('scale1');
sc2 = document.getElementById('scale2');


function pr(){
	console.log("sc1 " + sc1.className);
	console.log("sc2 " + sc2.className);
	console.log('currSelScale ' + currSelScale.id);
}

init();

function switchScales(){
		int = document.getElementById("intermediate-scale-container");
		beg = document.getElementById("beginner-scale-container");
		int.className = "selected-level";
		beg.className = "other-level";
		currSelLevel = int;
		
		console.log('beg ' + beg.className);
		console.log('int ' + int.className);
	};



// make selected a global var
