let computerMove = Math.floor(Math.random() * 3 + 1);

if(computerMove == 1){
  computerMove = 'kamień';
} else if (computerMove == 2){
  computerMove = 'papier';
} else {
  computerMove = 'nozyce';
}

document.write('Ruch komputera to: ' + computerMove);
