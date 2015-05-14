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
    $('.result').html("Player " + winningPlayer + " has won!");
    $('.play').html("Click Here to Play");
  }
}
function tieCheck(){
  if (turn === 9 && winningPlayer === 0){
    $('.result').html("It's a draw!");
    $('.play').html("Click Here to Play");
  }
}
function checkValue(e) {
    return(board[e]);
}
function changeColour(value) {
  var cell = '#' + value;
  if (currentPlayer === 1){
    $(cell).addClass('colour1');
  }else if (currentPlayer === 2){
    $(cell).addClass('colour2');
  }
}

function takeAChanceOnMe (){
  var randomCell = Math.floor((Math.random()*9));
  console.log(randomCell);
  console.log(checkValue(randomCell));
  if (checkValue(randomCell) === 0 && winningPlayer === 0) {
  board[randomCell] = currentPlayer;
  }
}

$(document).ready(function(){
  $('.box').click(function(){
    var cell = $(this).data("cell");
    checkValue(cell);
    if (checkValue(cell) === 0 && winningPlayer === 0) {
      board[cell] = currentPlayer;
      changeColour(cell);
      winnerCheck();
      changeTurn();
      if(winningPlayer===0){
        $('.result').html("Player " + currentPlayer + " to move")
      };
      tieCheck();
    }
  });
});








