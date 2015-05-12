var board = [0,0,0,0,0,0,0,0,0]
var winningPlayer = 0;
var turn = 0;
var currentPlayer = 1;
function changeTurn(){
  if (turn % 2 === 0){
    currentPlayer = 2;
  }else{
    currentPlayer = 1;
  } 
  turn += 1;
};
function winnerCheck(){
  if (
// rows    
    (board[0]==player && board[1]==player && board[2]==player) ||
    (board[3]==player && board[4]==player && board[5]==player) ||
    (board[6]==player && board[7]==player && board[8]==player) ||
// columns    
    (board[0]==player && board[3]==player && board[6]==player) ||
    (board[1]==player && board[4]==player && board[7]==player) ||
    (board[2]==player && board[5]==player && board[8]==player) ||
// diagonals
    (board[0]==player && board[4]==player && board[8]==player) ||
    (board[2]==player && board[4]==player && board[6]==player)
  ){
  return true;
  } 
  else{
    turn.changeTurn();
  }
};
function tieCheck() {
  for (var i = 0; i<board.length; i++){
    if (board[i]===0){
      console.log(i);
      return false;
    }
  }
  return true;
};

function checkValue(cell) {
    return(board[cell]);
}

$(document).ready(function(){
  $('.box').click(function(){
    var cell = $(this).data("cell")
    // var board = $(this).data("board")
    checkValue(cell)
    if (checkValue(cell) === 0 && winningPlayer === 0) {
      board[cell] = currentPlayer;
      console.log(board);
      changeTurn();
      // winnerCheck(); 
    }
  });
});








