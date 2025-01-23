const cards=document.querySelectorAll(".card");
const redefinir=document.getAnimations("redefinir");
cards.forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("selecionado");
    })
})

cards.forEach(card => {
    redefinir.addEventListener("click", () => {
        card.classList.toggle("selecionado");
    })
})   
