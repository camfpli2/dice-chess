var B_bishop; var B_rook; var B_knight; var B_king; var B_queen; var B_pawn;
var W_bishop; var W_rook; var W_knight; var W_king; var W_queen; var W_pawn;
var blackPieces=[];
var whitePieces=[];
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
  for(var g=0; g<8; g++){
    blackPieces.push(B_pawn);
    whitePieces.push(W_pawn);
  }
  for(var k=0; k<2; k++){
    blackPieces.push(B_rook);
    whitePieces.push(W_rook);
    blackPieces.push(B_knight);
    whitePieces.push(W_knight);
    blackPieces.push(B_bishop);
    whitePieces.push(W_bishop);
  }
  blackPieces.push(B_king);
  whitePieces.push(W_king);
  blackPieces.push(B_queen);
  whitePieces.push(W_queen);
  
  createCanvas(1200, 600);
  background(129, 30, 70);
}

function pickWhite(){
  var ind=random();
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
  if (key === 'w'){
    pickWhite();
  }
  else if (key === 'b'){
    pickBlack();
  }
  
}
