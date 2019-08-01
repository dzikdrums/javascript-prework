function playGame(playerMove) {
  clearMessages();

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
      printMessage("You lose!");
    } else if (argPlayerMove === "kamien" && argComputerMove === "nozyce") {
      printMessage("You win!");
    } else if (argPlayerMove === "kamien" && argComputerMove === "kamien") {
      printMessage("Draw!");
    } else if (argPlayerMove === "nozyce" && argComputerMove === "kamien") {
      printMessage("You win!");
    } else if (argPlayerMove === "nozyce" && argComputerMove === "papier") {
      printMessage("You win!");
    } else if (argPlayerMove === "nozyce" && argComputerMove === "nozyce") {
      printMessage("Draw!");
    } else if (argPlayerMove === "papier" && argComputerMove === "papier") {
      printMessage("Draw!");
    } else if (argPlayerMove === "papier" && argComputerMove === "nozyce") {
      printMessage("You lose!");
    } else  if (argPlayerMove === "papier" && argComputerMove === "kamien") {
      printMessage("You win!");
    }
  }
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);

  printMessage('Ruch komputera to: ' + computerMove);
  printMessage(' Twój ruch to: ' + playerMove);
  displayResult(computerMove, playerMove);

}

document.getElementById('play_rock').addEventListener('click', function(){
  playGame("kamien");
});

document.getElementById('play_paper').addEventListener('click', function(){
  playGame("papier");
});

document.getElementById('play_scissors').addEventListener('click', function(){
  playGame("nozyce");
});
