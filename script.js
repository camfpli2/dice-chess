var frog;
var sqaureSide=120;

function preload(){
  frog=loadImage('B-bishop.png');
}



function setup() {          
  createCanvas(1200, 600);
  background(129, 30, 70);
  drawBoard();
}

function drawBoard(){
  stroke(0);
  strokeWeight(3);
  fill(255)
  for(var g=0;g<5;g++){
    rect(100+g*200,30,200,200);
  }
}

function draw() {
  
}



function touchStarted() {
  
}

function touchEnded() {
  
}

function keyTyped() {     
  if (key === 'o'){

  }
  else if (key === 'f'){

  }
  
}
