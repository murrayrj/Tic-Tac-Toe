var board = [0,0,0,0,0,0,0,0,0]
var winningPlayer = 0;
var turn = {number : 0,
  currentPlayer:function() {
    if (this.number % 2 === 0) {
      return 1;
    }
    else {
      return 2;
    }
  },
  changeTurn:function(){
    this.number += 1;
  }
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
      console.log(cell)  
      // changeCell(cell);
      // winnerCheck(); 
    }
  });
});








