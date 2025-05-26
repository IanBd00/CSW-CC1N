function calculadora() {
    var numero1 = parseFloat(document.getElementById("n1").value);
    var numero2 = parseFloat(document.getElementById("n2").value);
    var operacao = parseInt(document.getElementById("operacao").value);

    switch (operacao) {
        case 1:
            return numero1 + numero2;
            break;
        case 2:
            return numero1 - numero2;
            break;
        case 3:
            return numero1 * numero2;
            break;
        case 4:
            return numero1 / numero2;
            break;  
    }
    console.log()
}

function mostrarResultado() {
    var resultado = calculadora();
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}
