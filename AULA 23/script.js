function CalcIdade() {
    let dia =  Number(document.getElementById("dia").value);
    const mes =  document.getElementById("mes").value;
    let ano =  Number(document.getElementById("ano").value);

    let datanasc = new Date (mes + '/' + dia + '/' + ano);
    let dataatual = new Date ();
    let resultado = dataatual.getFullYear() - datanasc.getFullYear()

    if (dia < dataatual.getDate() && mes > dataatual.getMonth() ){
        resultado--
    };

    document.getElementById("result").innerHTML = "Você tem " + resultado + " anos"
}

