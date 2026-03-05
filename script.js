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
  for(var g=0; g<8; g++){    //pawn pieces will be index 0 thru 7 for each color
    blackPieces.push(B_pawn);
    whitePieces.push(W_pawn);
  }
  for(var k=0; k<2; k++){    //these pieces will be indexes 8 thru 13 for each color
    blackPieces.push(B_rook);
    whitePieces.push(W_rook);
    blackPieces.push(B_knight);
    whitePieces.push(W_knight);
    blackPieces.push(B_bishop);
    whitePieces.push(W_bishop);
  }
  blackPieces.push(B_king);   //royalty pieces will be indexes 14 and 15 for each color
  whitePieces.push(W_king);
  blackPieces.push(B_queen);
  whitePieces.push(W_queen);
  
  createCanvas(1200, 600);
  background(129, 30, 70);
}

function getRandomInt() {  //return one random index from 8 thru 15 inclusive in case we need to fix triple pawn
  const min = 8;
  const max = 15;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getThreeDistinctRandomInts() {
  const result = new Set();

  while (result.size < 3) {
    const randomNum = Math.floor(Math.random() * 16); // 0–15 inclusive
    result.add(randomNum);
  }

  return Array.from(result);
}

function pickWhite(){
  background(129, 30, 70);
  var theseIndexes=getThreeDistinctRandomInts();
  var replacementIndex=getRandomInt();
  if(theseIndexes[0]<8 && theseIndexes[1]<8 && theseIndexes[2]<8){    //the dreaded triple pawn
    theseIndexes[2]=whitePieces[replacementIndex];
  }
  stroke(0);
  strokeWeight(3);
  fill(255)
  for(var g=0;g<3;g++){
    rect(100+g*200,30,200,200);
    image(whitePieces[theseIndexes[g]],100+g*200,30,200,200);
  }
}

function pickBlack(){
  background(129, 30, 70);
  var theseIndexes=getThreeDistinctRandomInts();
  var replacementIndex=getRandomInt();
  if(theseIndexes[0]<8 && theseIndexes[1]<8 && theseIndexes[2]<8){    //the dreaded triple pawn
    theseIndexes[2]=blackPieces[replacementIndex];
  }
  stroke(0);
  strokeWeight(3);
  fill(255)
  for(var g=0;g<3;g++){
    rect(100+g*200,300,200,200);
    image(blackPieces[theseIndexes[g]],100+g*200,300,200,200);
  }
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
