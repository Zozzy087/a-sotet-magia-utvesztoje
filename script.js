function checkCode() {
    const code = document.getElementById('code').value;
    const result = document.getElementById('result');
    
    // Itt állítsd be a helyes kódot
    if (code === "25") {
        result.innerHTML = "Helyes! Lapozz a [209]-re a következő fejezethez!";
        result.className = "success";
        // Itt átirányíthatod a játékost a következő fejezetre vagy megjelenítheted a folytatást
    } else {
        result.innerHTML = "Helytelen válasz. Próbáld újra!";
        result.className = "error";
    }
}
