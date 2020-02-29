let passcode = Math.floor( Math.random()*1000);
let tries = 10;
let guess;

let attemptsText = document.getElementById("attempts");
attemptsText.innerHTML = "Number of attemtps left: " + tries;

let clueText = document.getElementById("clue");

let button = document.getElementById("guess-button");
let number = document.getElementById("guess-text");
button.addEventListener("click", guessNumber);

function guessNumber(){
	guess = number.value;
	tries--;
	
	if( guess === passcode){
		document.body.innerHTML = "<h1>You win!</h1>" + "<p>Got it in " + (10-tries) + " tries.</p>";
	}
	else if (tries === 0){
		document.body.innerHTML = "<h1>You lose!</h1>" + "<p>The number was: " + passcode + "</p>";
	}
	else{
		attemptsText.innerHTML = "Number of attemtps left: " + tries;
		giveClue(guess);
	}
}

function giveClue(guess){
	if(guess > passcode){
		clueText.innerHTML += "<li>" + guess + " is too high! </li>";
	}
	else{
		clueText.innerHTML += "<li>" + guess + " is too low! </li>";
	}
}