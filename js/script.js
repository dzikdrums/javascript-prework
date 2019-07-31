let computerMove = Math.floor(Math.random() * 3 + 1);

if(computerMove == 1){
  computerMove = 'kamień';
} else if (computerMove == 2){
  computerMove = 'papier';
} else {
  computerMove = 'nozyce';
}

document.write('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

if(playerInput == 1){
  playerMove = 'kamień';
} else if (playerInput == 2){
  playerInput = 'papier';
} else {
  playerInput = 'nozyce';
}

document.write(' Twój ruch to: ' + playerMove);
