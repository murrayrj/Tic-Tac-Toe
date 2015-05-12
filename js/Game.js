var board = [0,0,0,0,0,0,0,0,0];
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
}
function winnerCheck(){
  if (
// rows    
    (board[0]==currentPlayer && board[1]==currentPlayer && board[2]==currentPlayer) ||
    (board[3]==currentPlayer && board[4]==currentPlayer && board[5]==currentPlayer) ||
    (board[6]==currentPlayer && board[7]==currentPlayer && board[8]==currentPlayer) ||
// columns    
    (board[0]==currentPlayer && board[3]==currentPlayer && board[6]==currentPlayer) ||
    (board[1]==currentPlayer && board[4]==currentPlayer && board[7]==currentPlayer) ||
    (board[2]==currentPlayer && board[5]==currentPlayer && board[8]==currentPlayer) ||
// diagonals
    (board[0]==currentPlayer && board[4]==currentPlayer && board[8]==currentPlayer) ||
    (board[2]==currentPlayer && board[4]==currentPlayer && board[6]==currentPlayer)
  ){
  winningPlayer = currentPlayer;
  alert("Player " + winningPlayer + " is a winner!");
  }
}
function tieCheck(){
  if (turn === 9){
    alert("It's a draw")
  }
}
function checkValue(cell) {
    return(board[cell]);
}
$(document).ready(function(){
  $('.box').click(function(){
    var cell = $(this).data("cell");
    checkValue(cell);
    if (checkValue(cell) === 0 && winningPlayer === 0) {
      board[cell] = currentPlayer;
      winnerCheck();
      console.log(board);
      changeTurn();
      tieCheck();
    }
  });
});








