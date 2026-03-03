var B_bishop; var B_rook; var B_knight; var B_king; var B_queen; var B_pawn;
var W_bishop; var W_rook; var W_knight; var W_king; var W_queen; var W_pawn;
var sqaureSide=120;

function preload(){
  B_bishop=loadImage('B_bishop.png');
  B_rook=loadImage('B_rook.png');
  B_knight=loadImage('B_knight.png');
  B_king=loadImage('B_king.png');
  B_queen=loadImage('B_queen.png');
  B_pawn=loadImage('B_pawn.png');
  W_bishop=loadImage('W_bishop.png');
  W_rook=loadImage('W_rook.png');
  W_knight=loadImage('W_knight.png');
  W_king=loadImage('W_king.png');
  W_queen=loadImage('W_queen.png');
  W_pawn=loadImage('W_pawn.png');
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
  for(var g=0;g<3;g++){
    rect(100+g*200,30,200,200);
    image(W_king,100+g*200,30,200,200);
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
