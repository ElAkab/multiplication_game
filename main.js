// Generate two random numbers between 0 and 9
function generateRandomNumbers() {
	const first_product = Math.floor(Math.random() * 10);
	const second_product = Math.floor(Math.random() * 10);

	// Get the card elements from the DOM to display the random numbers
	const firstCard = document.getElementById("first-card");
	const secondCard = document.getElementById("second-card");

	// Display the random numbers on the respective cards
	firstCard.textContent = first_product;
	secondCard.textContent = second_product;
	return [first_product, second_product];
}
const [first_product, second_product] = generateRandomNumbers();
// Calculate the correct answer by multiplying the two random numbers
const correct_answer = first_product * second_product;

// Log the random numbers and the correct answer to the console for debugging purposes
console.log(first_product);
console.log(second_product);
console.log(correct_answer);

// Get the button element and add a click event listener to it
const submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", () => {
	// 1. Get the input values from both players
	const input1 = document.getElementById("player1-input");
	const input2 = document.getElementById("player2-input");
	// 2. Get the output field element to display the result
	const outputField = document.getElementById("output-field");
	let scorePlayer1 = document.getElementById("score-player1");
	let scorePlayer2 = document.getElementById("score-player2");
	// 3. Convert the input values to integers and compare them with the correct answer
	const player1_answer = parseInt(input1.value);
	const player2_answer = parseInt(input2.value);
	// 4. Display the result in the output field based on the players' answers
	if (player1_answer === correct_answer && player2_answer === correct_answer) {
		alert("Both players win!");
		scorePlayer1.textContent = parseInt(scorePlayer1.textContent) + 1;
		scorePlayer2.textContent = parseInt(scorePlayer2.textContent) + 1;
	} else if (player2_answer === correct_answer) {
		alert("Player 2 wins!");
		scorePlayer2.textContent = parseInt(scorePlayer2.textContent) + 1;
	} else if (player1_answer === correct_answer) {
		alert("Player 1 wins!");
		scorePlayer1.textContent = parseInt(scorePlayer1.textContent) + 1;
	} else {
		alert("No one wins. Try again!");
		return; // Exit the function early if no one wins, so we don't clear the inputs or generate new numbers
	}

	// 5. Clear the input fields for the next round
	input1.value = "";
	input2.value = "";

	// 6. Generate new random numbers for the next
	const [new_first_product, new_second_product] = generateRandomNumbers();
});
