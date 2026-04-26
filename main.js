const first_product = Math.floor(Math.random() * 10);
const second_product = Math.floor(Math.random() * 10);

console.log(first_product);
console.log(second_product);

const submitBtn = document.getElementById("submit-btn");
const inputField = document.getElementById("input-field");
const player1Input = document.getElementById("player1-input");
const player2Input = document.getElementById("player2-input");
const outputField = document.getElementById("output-field");

submitBtn.addEventListener("click", () => {
	const player1Value = player1Input.value.trim();
	const player2Value = player2Input.value.trim();

	if (!player1Value && !player2Value) return;

	console.log("TEST !");
});
