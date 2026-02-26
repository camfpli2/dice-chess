var frog;
var sqaureSide=120;

function preload(){
  frog=loadImage("https://cdn.glitch.global/8eada658-7bdb-44f6-b46c-3ff43130d13b/Screen%20Shot%202023-11-15%20at%202.40.44%20PM.png?v=1700077264044");
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
  image(frog,500,30,200,200);
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
