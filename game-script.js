console.log("js in the hizzy");

let meyer = document.getElementById('duncan');
let meyerLocation = meyer.style.left;

let jerry = document.getElementById('jerry');
let jerryLocation = jerry.style.left;

let jerryStride = document.getElementById('jerryStride');
let duncanStride = document.getElementById('duncanStride');

let jerryButton = document.getElementById('jerryButton');

function Player(name, winMessage) {
	this.name = name;
	this.id = name.toLowerCase();
	this.position = 0;
	this.won = false;
	this.winMessage = winMessage;
	this.step = function() {
		console.log("STEP");
		let stride = randomGenerator();
		this.position = this.position + stride;
		document.getElementById(this.id).style.left = this.position + "px";
		document.getElementById(this.id + "Stride").textContent = stride;
		console.log(this.winMessage);
		if (this.position > 500) {
			this.won = true;
			alert(this.winMessage);
			location.reload();
		}
	};
}

let jerryPlayer = new Player("Jerry", "Jerry Wins! Yessss!");
let duncanPlayer = new Player("Duncan", "Ok Duncan, you win this time.");

jerryButton.addEventListener("click", function(){
	console.log('RUN JERRY!!!!');
	jerryPlayer.step();
	duncanPlayer.step();
});

function randomGenerator() {
  	return Math.round(Math.random() * (19)) + 1;
}
