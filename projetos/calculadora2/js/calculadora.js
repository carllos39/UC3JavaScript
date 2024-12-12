let display = document.getElementById("display");

numeroAtual = "";
operador = "";
numeroAnterior = "";

function acrescentaNumero(numero) {
    numeroAtual += numero;
    display.value = numeroAtual;
}

function acrescentaOperador(op) {
    if (numeroAtual === '') {
        numeroAnterior = numeroAtual;
        operador = op;
        numeroAtual = "";

    }
    function calculateResult() {
        if (numeroAnterior === '' || numeroAtual==='') return;
        let result;

        const num1 = parseFloat(numeroAnterior);
        const num2 = parseFloat(numeroAtual);

        switch (operador) {
            case '+':
                num1 + num2;
                break;
            case '-':
                num1 - num2;
                break;
            case '*':
                num1 * num2;
                break;
            case '/':
                num1 / num2;
                break;
            default:
                return;
        }
     display.value = result;
     numeroAtual = result.toSting();
     operador= "";
     numeroAnterior="";

    }
}


function clearDisplay(){
    numeroAtual="";
    numeroAnterior="";
    operador="";
    display.value="";
}