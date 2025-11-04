const menuDropdownWeb = document.querySelector("#menu-dropdown-web");
const gatilhoDropdownWeb = document.querySelector("#gatilho-dropdown-web");

//Mobile
const gatilhoDropDownMobile = document.querySelector("#gatilho-dropdown-mobile");
const menuDropDownMobile = document.querySelector("#menu-dropdown-mobile");

//Adicionar eventos de clique aos gatilhos
gatilhoDropdownWeb.addEventListener("click", (evento) =>{
    evento.stopPropagation(); //Impede que o elemento vaze
    menuDropdownWeb.classList.toggle("hidden");
    menuDropDownMobile.classList.add("hidden"); //Garantir que o menu feche
})

//Menu Mobile
gatilhoDropDownMobile.addEventListener("click", (evento) =>{
    evento.stopPropagation(); //Impede que o elemento vaze
    menuDropDownMobile.classList.toggle("hidden");
    menuDropdownWeb.classList.add("hidden"); //Garantir que o menu feche
})

//Movimentando o carrossel

//Selecionar os elementos
const containerSlides = document.querySelector("#carrossel-slides");
const todosSlides = document.querySelector(".slide-carrossel");
const btnAnterior = document.querySelector("#btn-anterior")
const btnProximo = document.querySelector("#btn-proximo")

let slideAtual = 0;
const totalSlides = todosSlides.length;


//Função principal
function atualizarCarrossel(){
    let valorTransform = `translateX(-${slideAtual * 100}%)`;
    containerSlides.style.transform = valorTransform
}

btnAnterior.addEventListener("click", () => {
    slideAtual--;
    if(slideAtual < 0){
        slideAtual = todosSlides - 1;
    }
    atualizarCarrossel()
})

btnProximo.addEventListener("click", () =>{
    slideAtual++;
    if(slideAtual >= totalSlides){
        slideAtual = 0
    }
    atualizarCarrossel();
})

//Inicializando carrosel
atualizarCarrossel();