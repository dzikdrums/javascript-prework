function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamien';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nozyce';
  }
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

function displayResult(argComputerMove, argPlayerMove) {
  if (playerMove == "kamien" && computerMove == "papier") {
    printMessage("You lose!");
  } else if (argPlayerMove == "kamien" && argComputerMove == "nozyce") {
    printMessage("You win!");
  } else if (argPlayerMove == "kamien" && argComputerMove == "kamien") {
    printMessage("Draw!");
  } else if (argPlayerMove == "nozyce" && argComputerMove == "kamien") {
    printMessage("You win!");
  } else if (argPlayerMove == "nozyce" && argComputerMove == "papier") {
    printMessage("You win!");
  } else if (argPlayerMove == "nozyce" && argComputerMove == "nozyce") {
    printMessage("Draw!");
  } else if (argPlayerMove == "papier" && argComputerMove == "papier") {
    printMessage("Draw!");
  } else if (argPlayerMove == "papier" && argComputerMove == "nozyce") {
    printMessage("You lose!");
  } else  if (argPlayerMove == "papier" && argComputerMove == "kamien") {
    printMessage("You win!");
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1);
let userInput = prompt("Wybierz ruch: 1 - kamien, 2 - papier, 3 - nozyce");

let computerMove = getMoveName(randomNumber);
let playerMove = getMoveName(userInput);

printMessage('Ruch komputera to: ' + computerMove);
printMessage(' Twój ruch to: ' + playerMove);
displayResult(computerMove, playerMove)

/*
if(computerMove == 1) {
  computerMove = 'kamien';
} else if (computerMove == 2) {
  computerMove = 'papier';
} else {
  computerMove = 'nozyce';
}
*/

/*
if(playerInput == 1) {
  playerInput = 'kamien';
} else if (playerInput == 2) {
  playerInput = 'papier';
} else if (playerInput == 3){
  playerInput = 'nozyce';
}
*/

/*
if (playerMove == "kamien" && computerMove == "papier") {
  printMessage("You lose!");
} else if (playerMove == "kamien" && computerMove == "nozyce") {
  printMessage("You win!");
} else if (playerMove == "kamien" && computerMove == "kamien") {
  printMessage("Draw!");
} else if (playerMove == "nozyce" && computerMove == "kamien") {
  printMessage("You win!");
} else if (playerMove == "nozyce" && computerMove == "papier") {
  printMessage("You win!");
} else if (playerMove == "nozyce" && computerMove == "nozyce") {
  printMessage("Draw!");
} else if (playerMove == "papier" && computerMove == "papier") {
  printMessage("Draw!");
} else if (playerMove == "papier" && computerMove == "nozyce") {
  printMessage("You lose!");
} else  if (playerMove == "papier" && computerMove == "kamien") {
  printMessage("You win!");
} else {
  printMessage("Unknown move");
}
*/
