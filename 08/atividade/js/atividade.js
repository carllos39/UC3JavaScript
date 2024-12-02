const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
const resp2 = document.querySelector("h4");
frm.addEventListener("submit", (e) => {
    const valor = Number(frm.valor.value)
    const combustivel =frm.combustivel.value;
  let desconto=0;
  let  total=0
    switch(combustivel){
       
        case "A":
            desconto = 0.25 * valor;
            total = valor - desconto;
            break
        case "G":
            desconto= 0.21 * valor;
            total = valor - desconto;
            break
        case "D":
            desconto = 0.14 * valor;
            total = valor - desconto;
            break
       
    }
    resp1.innerText=`Valor do desconto : ${desconto.toFixed(2)}`;
    resp1.style.color="green";
    resp2.innerText=`Valor total a pagar : ${total.toFixed(2)}`;
    resp2.style.color="orange";

  

   e.preventDefault();

   botao.onmouseover =()=>{
    botao.style.backgroundColor="yellow";
        }

    

});
//  botao.onmouseover =()=>{
//  botao.style.backgroundColor="yellow";
//     }