function ponto1(){
    var placar = document.querySelector("#pt1")
    var pt1 = Number(placar.innerHTML);
    pt1++;
    placar.innerHTML = pt1
}

function ponto2(){
    var placar = document.querySelector("#pt2")
    var pt2 = Number(placar.innerHTML);
    pt2++;
    placar.innerHTML = pt2
}

function resetar(){
    var placar = document.querySelector("#pt1")
    var pt1 = Number(placar.innerHTML);
    pt1 = 0;
    placar.innerHTML = pt1

    var placar = document.querySelector("#pt2")
    var pt2 = Number(placar.innerHTML);
    pt2 = 0
    placar.innerHTML = pt2
}

function anular1(){
    var placar = document.querySelector("#pt1")
    var pt1 = Number(placar.innerHTML)
    if(pt1 > 0){
        pt1--
        placar.innerHTML = pt1
    }
}

function anular2(){
    var placar = document.querySelector("#pt2")
    var pt2 = Number(placar.innerHTML)
    if(pt2 > 0){
        pt2--
        placar.innerHTML = pt2
    }
}

function basquete1(ponto){
    var placar = document.querySelector("#p3")
    var pontoNaTela = Number(placar.innerHTML)
    pontoNaTela = pontoNaTela + ponto;
    placar.innerHTML = pontoNaTela;
}

function basquete2(ponto){
    var placar = document.querySelector("#p4")
    var pontoNaTela = Number(placar.innerHTML)
    pontoNaTela = pontoNaTela + ponto;
    placar.innerHTML = pontoNaTela;
}