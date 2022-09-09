let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
	return Math.floor(Math.random() * 9);
}

function compareGuesses(hG, cG, target) {
	let h = Math.abs(hG - target);
	let c = Math.abs(cG - target);

	if (h == c || h < c) return true;
	return false;
}

function updateScore(winner) {
	if (winner == 'human') humanScore += 1;
	else computerScore += 1;
}

function advanceRound() {
	currentRoundNumber += 1;
}
