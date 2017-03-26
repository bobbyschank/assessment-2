let jerryButton = document.getElementById('jerryButton');

function Player(name, winMessage) {
	this.name = name;
	this.id = name.toLowerCase();
	this.position = 0;              				// player starts on left side of section
	this.winMessage = winMessage;  					// what the alert will display when the game ends
	this.element = document.getElementById(name);
	this.step = function() {
		let stride = randomGenerator();
		this.position = this.position + stride;
		document.getElementById(this.id).style.left = this.position + "px";
		document.getElementById(this.id + "Stride").textContent = stride;
		let containerWidth = document.getElementById('container').offsetWidth;  // if either div reaches the edge of the section, end the game
		let finishLine = containerWidth - (35 + 6);  // find container width, and subtract the width of the guys div
		if (this.position > finishLine) {
			alert(this.winMessage);
			location.reload();  				//reload page after game end, and after user acknowledges alert
		}
	};
}

// Instantiate the players
let jerryPlayer = new Player("Jerry", "Jerry Wins! Yessss!");
let duncanPlayer = new Player("Duncan", "Ok Duncan, you win this time.");

jerryButton.addEventListener("click", function(){
	// Each time the button is clicked, jerry and duncan each take a step
	jerryPlayer.step();
	duncanPlayer.step();
});

function randomGenerator() {
  	return Math.round(Math.random() * (29)) + 1;    // generates random integer between 1 and 30
}
