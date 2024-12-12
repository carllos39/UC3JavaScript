let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = ""; 

function appendNumber(number){
    currentInput += number;
    display.value = currentInput;
}
function appendOperator(op) {
    if (currentInput ==='') return;
    firstOperand = currentInput;
    operator = op;
    currentInput='';

}

function calculateResult() {
    if (firstOperand ==='' || currentInput ==='') return;
    let result;

    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
            default:
            return;
    }
    display.value = result;
    currentInput= result.toString();
    operator='';
    firstOperand='';
}

function clearDisplay(){
    currentInput='';
    operator ='';
    firstOperand='';
    display.value='';
}