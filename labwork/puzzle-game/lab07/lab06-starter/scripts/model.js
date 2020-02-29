let passcode = Math.floor( Math.random()*1000);
let guess = new Guess();
let then = Date.now();
let timeleft = 30;
let gameover = false;

function guessNumber(guess){
	if( guess == passcode){
		gameover = true;
		printGameOver('WIN');
	}
	else if (timeleft <= 0 && gameover == false){
		printGameOver('LOSE');
	}
	else{
		printAttemptsRemaining(timeleft);
		giveClue(guess);
	}
}

function giveClue(guess){
	if (guess > passcode){
		printClue('HI', guess);
	}
	else{
		printClue('LO', guess);
	}
}

function main(){
	let now = Date.now();
	if( timeleft <= 0 && gameover == false){
		printGameOver('LOSE');
	}
	else if( now - then > 1000){
		timeleft--;
		printDigits();
		printAttemptsRemaining();
		then = Date.now();
	}
	requestAnimationFrame(main);
}
main();
