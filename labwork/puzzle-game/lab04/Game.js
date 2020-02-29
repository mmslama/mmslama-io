let passcode = Math.floor( Math.random()*1000);
let tries = 10;

while (tries > 0 && guess != passcode){
	console.log("You have " + tries + " guesses left.");
	var guess = prompt("Enter a number");
	tries--;
	
	if (guess == passcode){
		console.log("You win! Got it in " + (10-tries) + " guesses");
	}
	else if (tries == 0){
		console.log("You lose! The number was " + passcode);
	}
	else{
		giveClue(guess);
	}
}

function giveClue(guess){
	if (guess > passcode){
		console.log(guess + " is too High!");
	}
	else{
		console.log(guess + " is too Low!");
	}
}