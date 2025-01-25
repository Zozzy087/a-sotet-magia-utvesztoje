function rollDice() {
    const dice = [0, 0, 0]; // A kockadobások tárolása
    let successes = 0; // Sikeres dobások száma

    // Három D6 dobás
    for (let i = 0; i < 3; i++) {
        dice[i] = Math.floor(Math.random() * 6) + 1; // Véletlen szám 1-6 között
        if (dice[i] >= 4) {
            successes++; // 4 vagy nagyobb érték sikeres
        }
    }

    // Eredmények megjelenítése
    document.getElementById("dice-results").textContent = `Kockadobások: ${dice.join(", ")}`;
    document.getElementById("success-results").textContent = `Sikeres dobások száma: ${successes}`;
}

function checkCode() {
    const correctCode = "helyes"; // Példa megoldás
    const userCode = document.getElementById("code").value.trim();

    if (userCode.toLowerCase() === correctCode) {
        document.getElementById("result").textContent = "Helyes megoldás!";
        document.getElementById("result").className = "success";
    } else {
        document.getElementById("result").textContent = "Hibás megoldás. Próbáld újra!";
        document.getElementById("result").className = "error";
    }
}
