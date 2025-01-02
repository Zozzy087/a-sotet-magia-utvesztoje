function checkCode() {
    const code = document.getElementById('code').value;
    const result = document.getElementById('result');
    
    // Itt állítsd be a helyes kódot
    if (code === "3419") {
        result.innerHTML = "Helyes! A következő fejezet tartalma...";
        result.className = "success";
        // Itt átirányíthatod a játékost a következő fejezetre vagy megjelenítheted a folytatást
    } else {
        result.innerHTML = "Helytelen kód. Próbáld újra!";
        result.className = "error";
    }
}
