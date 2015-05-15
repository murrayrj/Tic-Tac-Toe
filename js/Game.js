var board = [0,0,0,0,0,0,0,0,0];
var winningPlayer = 0;
var turn = 0;
var currentPlayer = 1;
var vsComp = 0;
var rand = Math.ceil((Math.random()*8))

function initialize(){
  board = [0,0,0,0,0,0,0,0,0];
  winningPlayer = 0;
  turn = 0;
  currentPlayer = 1;
  $('.play').html('');
  $('.human').html('2 players');
  $('.computer').html('1 player');
  $('.result').html("");
  $('.box').removeClass( "colour1 colour2" );
}

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
function computerMove(){
  if(turn===0){
    if(board[4]===0){
      return 4;
    }else{
      return 0;
    }
  }
  for(var i =0; i<9; i++){
    if(i%3===0 && board[i] === board[i+2] && board[i] !== 0 && board[i+1]===0){
      return i+1;
    }
    else if(i%3===1 && board[i] === board[i+1] && board[i] !== 0 && board[i-1]===0){
      return i-1;
    }
    else if(i%3===0 && board[i] === board[i+1] && board[i] !== 0 && board[i+2]===0){
      return i+2;
    }
    else if(0!==board[i]===board[i+3]){
      if(i<3 && board[i+6]===0){
        return i+6;
      }else if(board[i-3]===0){
        return i-3;
      }
    }
    else if(board[i]==board[i+6] && board[i+3]==0){
      return i+3;
    }
  }
  // if(board[1]==0&&0!==board[0]==board[2]){
  //   return 1;
  // }
  // else if(board[2]==0&&1==board[0]==board[5]==board[8]){
  //   return 2;
  // }
  // else if(board[8]==0&&0!==board[2]==board[5]==board[6]){
  //   return 8;
  // }
  // else if(board[3]==0&&(0!==board[0]===board[8]||board[2]===1&&board[2]===board[6]){
  //   return 3;
  // }
  if(board[8]==0&&(1==board[0]==board[4])||(1==board[5]==board[7])){
    return 8;
  }
  else if(board[6]==0&&(1==board[2]==board[4])||(1==board[3]==board[7])){
    return 6;
  }
  else if(board[2]==0&&(1==board[4]==board[6])||(1==board[1]==board[5])||(1==board[0]==board[8])){
    return 2;
  }
  else if(board[0]==0&&(1==board[4]==board[8])||(1==board[1]==board[3])||(1==board[2]==board[6])){
    return 0;
  }
}

$(document).ready(function(){
  $('.box').click(function(){
    $('.human').html('');
    $('.computer').html('');
    $('.result').html('');
    var cell = $(this).data("cell");
    checkValue(cell);
    if (checkValue(cell) === 0 && winningPlayer === 0) {
      board[cell] = currentPlayer;
      changeColour(cell);
      if(vsComp===1 && turn%2===0){
        computerMove();
        var bing = computerMove();
        currentPlayer = 2;
        board[bing]=currentPlayer;
        turn++;
        changeColour(bing);
        console.log(bing);
      }
      winnerCheck();
      changeTurn();
      if(winningPlayer===0 && vsComp ===0){
        $('.result').html("Player " + currentPlayer + " to move");
      }
      tieCheck();
    }
  });
  $('.human').click(function(){
    $('.result').html("Player 1 to move");
    $('.human').html('');
    $('.computer').html('');
  });
  $('.computer').click(function(){
    vsComp = 1;
    $('.human').html('');
    $('.computer').html('');
    $('.result').html("You go first");
  });
  $('.play').click(function(){
    initialize();
  });
});
