function rollDice() {
  const dice = [0, 0, 0]; // Array for storing dice rolls
  let successes = 0; // Count of successful rolls

  // Roll each die
  for (let i = 0; i < 3; i++) {
    dice[i] = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
    if (dice[i] >= 4) {
      successes++; // Count successes (4 or higher)
    }
  }

  // Update results in HTML
  document.getElementById("dice-results").textContent = `Dice rolls: ${dice.join(", ")}`;
  document.getElementById("success-results").textContent = `Number of successes: ${successes}`;
}
