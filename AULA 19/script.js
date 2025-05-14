function dados() {
document.getElementById("texto").innerHTML = "O nome digitado foi:" + window.prompt("Qual o seu nome:");
    window.confirm("Você está gostando?")
    }

function aba() {
    window.open('index2.html', '_blank')
}

function nome() {
    let nome = document.getElementById("nomeinp") 
    window.alert(`Seu nome é: ${nome.value}`);
}
