var canvas;
var canvasContext;
var p1 = new playerClass();
var p2 = new playerClass();

window.onload = function(){
	canvas = document.getElementById('gameCanvas');
	canvasContext = canvas.getContext('2d');

	var framesPerSecond = 30;
	setInterval(function(){ drawAll();
							moveBall();
							p1.move();
							p2.move();},
							1000/framesPerSecond);

	setUpInput();
	setUpImages();
	p2.x = 650;
	p2.isAI = true;
}

function dist(x1,y1, x2,y2) {
	var dx = x2-x1;
	var dy = y2-y1;

	return Math.sqrt(dx*dx + dy*dy);
}

function drawAll() {
	var background = document.getElementById("background");
	canvasContext.drawImage(background,0,0);

	if(player1Loaded) {
		p1.draw();
		p2.draw();
	}

	drawBall();
	//canvasContext.fillStyle = 'red';
	//canvasContext.beginPath();
	//canvasContext.arc(ballX, ballY, BALL_RADIUS, 0,Math.PI * 2, true);
	//canvasContext.fill();
}
