const adicionar=document.getElementById("adicionar");
const btn=document.getElementById("btn");
const lista=document.getElementById("lista");

btn.addEventListener("click", ()=>{
    if(adicionar.value){
        criarElementos(adicionar.value);
       adicionar.value="";
       adicionar.focus(); 

    }else{
    alert("Digite uma terefa válida!");
    adicionar.focus();
    }



});

function criarElementos(elemento){

const li= document.createElement("li");

const textoDoElemento=document.createElement("span");

textoDoElemento.innerText= elemento;

const checkbox=document.createElement("input");
checkbox.type = "checkbox";

checkbox.addEventListener("change", ()=>{
  li.classList.toggle("completed", checkbox.checked)

//  if(checkbox.checked){
//      li.classList.add("completed");

//  }else{
//      li.classList.remove("completed");
//  }
});

li.append(checkbox);
li.append(textoDoElemento);
lista.append(li);
}


