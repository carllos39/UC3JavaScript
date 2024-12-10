const terefaInput=document.getElementById("tarefaInput");
const addBtn=document.getElementById("addBtn");
const listaTarefas=document.getElementById("listaTarefas");

addBtn.addEventListener("click", ()=>{
if(terefaInput){
    criarTarefa(terefaInput.value);
    terefaInput.value="";
    terefaInput.focus();
}else{
    alert("Digite uma terefa válida!");
    terefaInput.focus();
}
});

function criarTarefa(titulo){
const li= document.createElement("li");

    // Adicionar texto a uma tarefa
const textoDaTarefa= document.createElement("span");

textoDaTarefa.innerText= titulo;

checkbox.type="checkbox";
checkbox.addEventListener("change", ()=>{

    li.classList.toggle("completed", checkbox.checked);

    // if(checkbox.checked) {
    //     li.className = "completed";
    // } else {
    //     li.className = "";
    // }

    if( checkbox.checked){
         li.classList.add("completed");
       
     }else{
         li.classList.remove("completed");
     }

});
li.append(checkbox)
li.append(textoDaTarefa);
listaTarefas.append(li);
}