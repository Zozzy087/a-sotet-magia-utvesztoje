// Levenshtein-távolság kiszámítása
function levenshtein(a, b) {
    const matrix = [];

    // Initialize the matrix
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Compute distances
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b[i - 1] === a[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // Substitution
                    matrix[i][j - 1] + 1,     // Insertion
                    matrix[i - 1][j] + 1      // Deletion
                );
            }
        }
    }

    return matrix[b.length][a.length];
}

// Válasz ellenőrzése
function checkCode() {
    const code = document.getElementById('code').value.trim().toLowerCase();
    const result = document.getElementById('result');

    // Elfogadható válaszok listája
    const validAnswers = [
        "ellopok egyet", 
        "ellopom", 
        "kölcsönveszem", 
        "ellopnék egyet", 
        "kölcsönveszek egyet", 
        "lopok egyet", 
        "kölcsönzés"
    ];

    // Maximum eltérések száma (pl. 2 karakter hiba megengedett)
    const maxDistance = 2;

    let isValid = false;

    for (let answer of validAnswers) {
        if (levenshtein(code, answer) <= maxDistance) {
            isValid = true;
            break;
        }
    }

    if (isValid) {
        result.innerHTML = "Helyes! Lapozz a [63]-ra a következő fejezethez!";
        result.className = "success";
    } else {
        result.innerHTML = "Helytelen válasz. Próbáld újra!";
        result.className = "error";
    }
}

