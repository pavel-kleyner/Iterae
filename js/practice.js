var tempo = 90;
var currSelScale = document.getElementsByClassName("selected")[0];


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
		int.style.visibility = "visible";
		beg.style.visibility = "hidden";
		
		console.log('beg ' + beg.visibility);
		console.log('int ' + int.visibility);
	};



// make selected a global var
