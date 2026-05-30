// Generate two random numbers between 0 and 9
function generateRandomNumbers() {
	const first_factor = Math.floor(Math.random() * 10);
	const second_factor = Math.floor(Math.random() * 10);

	// Get the card elements from the DOM to display the random numbers
	const firstCard = document.getElementById("first-card");
	const secondCard = document.getElementById("second-card");

	let product = first_factor * second_factor;

	// Display the random numbers on the respective cards
	firstCard.textContent = first_factor;
	secondCard.textContent = second_factor;
	return [first_factor, second_factor, product];
}

let [first_factor, second_factor, product] = generateRandomNumbers();
// Calculate the correct answer by multiplying the two random numbers

// Log the random numbers and the correct answer to the console for debugging purposes
console.log(first_factor);
console.log(second_factor);
console.log(product);

// Get the button element and add a click event listener to it
const submitBtn = document.getElementById("submit-btn");

// 1. Get the input values from both players
const input1 = document.getElementById("player1-input");
const input2 = document.getElementById("player2-input");

// State management of the submit button based on the input values
function updateButtonState() {
	if (input1.value.trim() !== "" || input2.value.trim() !== "") {
		submitBtn.disabled = false; // Enable the button if both input fields are not empty
		submitBtn.classList.remove("btn-disabled"); // Remove the disabled styling
	} else {
		submitBtn.disabled = true; // Disable the button if either input field is empty
		submitBtn.classList.add("btn-disabled"); // Add disabled styling
	}
}

// Initial check
updateButtonState();

// Add event listeners to update button state on input
input1.addEventListener("input", updateButtonState);
input2.addEventListener("input", updateButtonState);

submitBtn.addEventListener("click", () => {
	// 2. Get the output field element to display the result
	const outputField = document.getElementById("output-field");
	let scorePlayer1 = document.getElementById("score-player1");
	let scorePlayer2 = document.getElementById("score-player2");
	// 3. Convert the input values to integers and compare them with the correct answer
	const player1_answer = parseInt(input1.value);
	const player2_answer = parseInt(input2.value);
	// 4. Display the result in the output field based on the players' answers
	if (player1_answer === product && player2_answer === product) {
		alert("Both players win!");
		scorePlayer1.textContent = parseInt(scorePlayer1.textContent) + 1;
		scorePlayer2.textContent = parseInt(scorePlayer2.textContent) + 1;
	} else if (player1_answer === product) {
		alert("Player 1 wins!");
		scorePlayer1.textContent = parseInt(scorePlayer1.textContent) + 1;
	} else if (player2_answer === product) {
		alert("Player 2 wins!");
		scorePlayer2.textContent = parseInt(scorePlayer2.textContent) + 1;
	} else {
		alert("No one wins. Try again!");
		return; // Exit the function early if no one wins, so we don't clear the inputs or generate new numbers
	}

	// 5. Clear the input fields for the next round
	input1.value = "";
	input2.value = "";
	updateButtonState();

	// 6. Generate new random numbers for the next
	const [new_first_factor, new_second_factor, new_product] =
		generateRandomNumbers();

	// 7. Update the correct answer for the next round
	product = new_product;
});

let modal = document.createElement("div");
modal.classList.add("modal");
modal.style.display = "block";
modal.innerHTML = `
	<div class="modal-content">
		<h3>Player </h3>
	</div>
`;

const startGameBtn = modal.querySelector("#start-game-btn");
startGameBtn.addEventListener("click", () => {
	modal.style.display = "none";
});

document.body.appendChild(modal);
