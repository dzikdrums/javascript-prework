let computerMove = Math.floor(Math.random() * 3 + 1);

if(computerMove == 1) {
  computerMove = 'kamien';
} else if (computerMove == 2) {
  computerMove = 'papier';
} else {
  computerMove = 'nozyce';
}

printMessage('Ruch komputera to: ' + computerMove);
console.log("Ruch komputera to: " + computerMove)

let playerInput = prompt('Wybierz swój ruch! 1: kamien, 2: papier, 3: nozyce.');

if(playerInput == 1) {
  playerInput = 'kamien';
} else if (playerInput == 2) {
  playerInput = 'papier';
} else if (playerInput == 3){
  playerInput = 'nozyce';
}

printMessage(' Twój ruch to: ' + playerInput);
console.log("Ruch gracza to: " + computerMove)

if (playerInput == "kamien" && computerMove == "papier") {
  printMessage("You lose!");
} else if (playerInput == "kamien" && computerMove == "nozyce") {
  printMessage("You win!");
} else if (playerInput == "kamien" && computerMove == "kamien") {
  printMessage("Draw!");
} else if (playerInput == "nozyce" && computerMove == "kamien") {
  printMessage("You win!");
} else if (playerInput == "nozyce" && computerMove == "papier") {
  printMessage("You win!");
} else if (playerInput == "nozyce" && computerMove == "nozyce") {
  printMessage("Draw!");
} else if (playerInput == "papier" && computerMove == "papier") {
  printMessage("Draw!");
} else if (playerInput == "papier" && computerMove == "nozyce") {
  printMessage("You lose!");
} else  if (playerInput == "papier" && computerMove == "kamien") {
  printMessage("You win!");
} else {
  printMessage("Unknown move");
}
