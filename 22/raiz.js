function calcularRaiz(event, numero) {
    event.preventDefault(); 
    let raiz = Math.sqrt(numero); 
    alert(`A raiz quadrada de ${numero} é ${raiz}`);
}