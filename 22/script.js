function escreverNumeros() {
    let n = parseInt(prompt("Digite um número:"));
    let div = document.getElementById("resultado");
    div.innerHTML = "";

    if (!isNaN(n) && n > 0) {
        for (let i = 1; i <= n; i++) {
            div.innerHTML += i + "<br>"; 
        }
    } else {
        div.innerHTML = "Por favor, insira um número válido!";
    }
}
