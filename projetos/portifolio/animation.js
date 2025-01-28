const hero = document.querySelector("#hero");
const heroPosition = hero.getBoundingClientRect();

// Função para gerenciar animações no Hero, Sobre, e Work
function handleScrollAnimatinos() {
    if(heroPosition.top < window.innerHeight) {
        hero.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
        hero.style.opacity = 1;// deixa totalmente visível
        hero.style.transform = 'translateY(0)';// traz de volta para sua posição original// traz de volta para sua posição original
    }
}

//Verifica se a tela foi carregada
window.addEventListener('load', () => {
    handleScrollAnimatinos();  
});