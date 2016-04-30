document.addEventListener("DOMContentLoaded", init);

var didRight = false;
var didLeft = false;

function openWin() {
    window.open("http://www.elenakaravasili.com/");
}

function init(){
	var top_part = document.getElementById('bag_top_part');
	top_part.addEventListener('click',moveRight);

	var btm_part = document.getElementById('bag_bottom_part');
	btm_part.addEventListener('click',moveLeft);

	var handle = document.getElementById('handle');
	btm_part.addEventListener('click',changePic);
}


function moveRight(){
	var svg = document.getElementById('svg');
	
	if(didLeft == true){
		svg.style.animationName = "tiltRight2";
	}

	svg.style.animationPlayState = "running";

	var right = document.getElementById('right');
	right.style.display='block';

	didRight = true;
}

function moveLeft(){
	var svg = document.getElementById('svg');
	svg.style.animationPlayState = "running";
	
	if(didRight == true){
		svg.style.animationName = "tiltleft";
	} else {
		svg.style.animationName = "tiltleft2";
	}
	

	var right = document.getElementById('left');
	right.style.display='block';

	didLeft = true;
}

function changePic(){
	var randomNumber = Math.floor(Math.random() * 7);
	var imgPath = randomNumber + '.jpg';

	var design = document.getElementById('design');
	design.src= imgPath;
}
