let botao1 = document.getElementById("botao")

function idade(){
    var idadepessoa = document.getElementById("nidade").value;

    if (idadepessoa >= 1 && idadepessoa <= 11) {
        window.alert("Você é uma criança!");
    }

    else if (idadepessoa > 11 && idadepessoa <= 16) {
            window.alert("Você é um adolescente!")
    }

    else if (idadepessoa > 16 && idadepessoa <= 29) {
        window.alert("Você é jovem!")
    }

    else if (idadepessoa > 29 && idadepessoa <= 59) {
        window.alert("Você é adulto!")
    }

    else if (idadepessoa > 59) {
        window.alert("Você é idoso!")
    }
    
    else{
        window.alert("Você escreveu algo que nao é compatível")
    }

}

botao1.addEventListener("click" , function (){
    idade()
    oi()
})