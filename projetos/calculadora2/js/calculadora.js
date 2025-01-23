let display = document.getElementById("display");

let numeroAtual ="";
let operador ="";
let numeroAnterior ="";

function acresNumero(numero) {
    numeroAtual += numero;
    display.value = numeroAtual;
}

function operadores(op) {
    if (numeroAtual ==="") return ;
        numeroAnterior = numeroAtual;
        operador = op;
        numeroAtual ="";
     
      
    }

    function calculateResult() {
        if (numeroAnterior ==='' || numeroAtual==='') return;
        let result;

        const num1 = parseFloat(numeroAnterior);
        const num2 = parseFloat(numeroAtual);

        switch (operador) {
            case '+':
               result= num1 + num2;
                break;
            case '-':
                result= num1 - num2;
                break;
            case '*':
               result= num1 * num2;
                break;
            case '/':
               result= num1 / num2;
                break;
            default:
                return;
        }
     display.value = result;
     numeroAtual = result.toString();
     operador='';
     numeroAnterior='';

    }



function clearDisplay(){
    numeroAtual="";
    numeroAnterior="";
    operador="";
    display.value="";
}