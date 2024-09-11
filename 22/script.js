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


function calcularRaiz() {
    let numero = parseFloat(prompt("Digite um número para calcular a raiz quadrada:"));
    
    if (!isNaN(numero) && numero >= 0) {
        let raiz = Math.sqrt(numero);
        alert(`A raiz quadrada de ${numero} é ${raiz}`);
    } else {
        alert("Por favor, insira um número válido e não negativo.");
    }
}

function mostrarModal() {
    let texto = prompt("Digite o texto para o modal:");

    if (texto) {
        document.getElementById("modalBody").innerText = texto;
        $('#meuModal').modal('show');
    } else {
        alert("Texto não inserido.");
    }
}