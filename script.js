const Numero = document.querySelector('.Number');

function atualizar(operacao){
    console.log(Numero);
    var number = parseInt(Numero.textContent);
    switch (operacao){
        case 3:Numero.innerHTML=number+1;
        break;
        case 1:Numero.innerHTML=number-1;
        break;
        case 2:Numero.innerHTML=0;
        break;

    }
}