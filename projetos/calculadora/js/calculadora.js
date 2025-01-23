
const display=document.getElementById("display");
buttons= document.querySelectorAll(".btn");
const clearButton=document.getElementById("clear");
const equalsButton=document.getElementById("equals");


buttons.forEach(appendNumber =>{
    appendNumber.addEventListener("click", ()=>{
        display.value += appendNumber.getAttribute("data-value");

    });

});

clearButton.addEventListener("click", ()=>{
    display.value="";
});

equalsButton.addEventListener("click", ()=>{
    display.value= eval(display.value);
});