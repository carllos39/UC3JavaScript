const tarefaInput = document.getElementById("tarefaInput");
const addBtn = document.getElementById("addBtn");
const listaDeTarefas = document.getElementById("listaDeTarefas");

addBtn.addEventListener("click", () => {
    if(tarefaInput.value) {
        criarTarefa(tarefaInput.value);
        tarefaInput.value = "";
        tarefaInput.focus();
    } else {
        alert("Digite uma tarefa válida!");
        tarefaInput.focus();
    }
})

function criarTarefa(titulo) {
    const li = document.createElement("li");

    // Adicionar texto a uma tarefa
    const textoDaTarefa = document.createElement("span");
    textoDaTarefa.innerText = titulo;

    // Adicionar o Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {
        // li.classList.toggle("completed", checkbox.checked)

        // if(checkbox.checked) {
        //     li.className = "completed";
        // } else {
        //     li.className = "";
        // }

        if(checkbox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    })
    const removerBtn = document.createElement("button");
    removerBtn.innerHTML="<strong>🗑</strong>"
    removerBtn.addEventListener("click", ()=>{
    listaDeTarefas.removeChild(li);
    });
    const divFlexLi = document.createElement("div");
    divFlexLi.append(checkbox);
    divFlexLi.append(textoDaTarefa);

    li.append(checkbox);
    li.append(textoDaTarefa);
    listaDeTarefas.append(li);
}
tarefaInput.addEventListener("keydown",(event)=>{
if(event.key==="Enter"){
    addBtn.click();
}
});