function playGame(playerMove) {

  function getMoveName(argMoveId) {
    if (argMoveId === 1) {
      return 'kamien';
    } else if (argMoveId === 2) {
      return 'papier';
    } else if (argMoveId === 3) {
      return 'nozyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  function displayResult(argComputerMove, argPlayerMove) {
    if (playerMove === "kamien" && computerMove == "papier") {
      computerGamePoints++;
      printResult("You lose!");
    } else if (argPlayerMove === "kamien" && argComputerMove === "nozyce") {
      playerGamePoints++;
      printResult("You win!");
    } else if (argPlayerMove === argComputerMove) {
      printResult("Draw!");
    } else if (argPlayerMove === "nozyce" && argComputerMove === "kamien") {
      computerGamePoints++;
      printResult("You lose!");
    } else if (argPlayerMove === "nozyce" && argComputerMove === "papier") {
      playerGamePoints++;
      printResult("You win!");
    } else if (argPlayerMove === "papier" && argComputerMove === "nozyce") {
      computerGamePoints++;
      printResult("You lose!");
    } else  if (argPlayerMove === "papier" && argComputerMove === "kamien") {
      playerGamePoints++;
      printResult("You win!");
    }
  }
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);

    clearMessages();
    clearResults();
    clearMatchCount();
    displayResult(computerMove, playerMove);
    printMessage("Maszyna--->" + computerGamePoints + " Człowiek--->" + playerGamePoints);
    printMessage("_________________");
    printMessage('Ruch komputera to: ' + computerMove);
    printMessage(' Twój ruch to: ' + playerMove);
    checkIfEndGame();


    function checkIfEndGame() {
      if(computerGamePoints == 5 || playerGamePoints == 5 ) {
        if (computerGamePoints == 5) {
          computerMatchPoints++
        } else {
          playerMatchPoints++
        }
        computerGamePoints = 0;
        playerGamePoints = 0;
        clearMessages();
        clearResults();
        printMatchCount("Mecze wygrane przez maszyne: " + computerMatchPoints + "\n Mecze wygrane przez człowieka: " + playerMatchPoints);
      }
    }


}

function resetGame() {
  computerGamePoints = 0;
  playerGamePoints = 0;
  computerMatchPoints = 0;
  playerMatchPoints = 0;
  clearMessages();
  clearResults();
  clearMatchCount();
}


var computerGamePoints = 0;
var playerGamePoints = 0;
var computerMatchPoints = 0;
var playerMatchPoints = 0;

document.getElementById('play_rock').addEventListener('click', function(){
  playGame("kamien");
});

document.getElementById('play_paper').addEventListener('click', function(){
  playGame("papier");
});

document.getElementById('play_scissors').addEventListener('click', function(){
  playGame("nozyce");
});

document.getElementById('reset').addEventListener('click', function(){
  resetGame();
});
