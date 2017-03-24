console.log("js in the hizzy");

let meyer = document.getElementById('duncan');
let jerry = document.getElementById('jerry');

let jerryButton = document.getElementById('jerryButton');
jerryButton.

function randomGenerator() {
  	return Math.round(Math.random() * (9)) + 1;
}


jerry.color = "red";

let jerryLocation = jerry.style.left;
console.log("jerryLocation:" + jerryLocation);

function step() {
	let randomInt = randomGenerator();
	// guys[0].style.left = randomInt * 10;
	// guys[0].style.background-color = "blue";

console.log(randomInt);
}

step();