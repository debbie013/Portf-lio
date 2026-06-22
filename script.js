

//------------------------------------------------------------------------------------------
function filtrar(categoria) {
    const projetos = document.querySelectorAll('.card-projeto');

    projetos.forEach(projeto => {
        if (
            categoria === 'todos' ||
            projeto.dataset.categoria === categoria
        ) {
            projeto.style.display = 'block';
        } else {
            projeto.style.display = 'none';
        }
    });
}


//-------------------------------------------------------------------------------------------
const mostragem = document.querySelector(".mostragem");

document.querySelector(".seta-direita")
.addEventListener("click", () => {

    mostragem.scrollBy({
        left: 320,
        behavior: "smooth"
    });

});

document.querySelector(".seta-esquerda")
.addEventListener("click", () => {

    mostragem.scrollBy({
        left: -320,
        behavior: "smooth"
    });

});

//-------------------------------------------------------------------------------------------
const hero = document.querySelector(".hero");
const brilho = document.querySelector(".brilho-cursor");

hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();

    brilho.style.left = `${e.clientX - rect.left}px`;
    brilho.style.top = `${e.clientY - rect.top}px`;
});

//-------------------------------------------------------------------------------------------

const ano = document.getElementById("ano");
ano.textContent = new Date().getFullYear();

//-------------------------------------------------------------------------------------------

const cards = document.querySelectorAll('.card-imagem-container');
cards.forEach(card => {
    const slides = card.querySelectorAll('.slide');
    let atual = 0;
    setInterval(() => {
        slides[atual].classList.remove('ativo');
        atual++;
        if(atual >= slides.length){
            atual = 0;
        }

        slides[atual].classList.add('ativo');
    }, 2500);

});

//-------------------------------------------------------------------------------------------

const hamburguer = document.getElementById('hamburguer');
const menu = document.getElementById('menu');

hamburguer.addEventListener("click", () => {
    menu.classList.toggle("ativo");
});
