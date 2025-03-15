
let a = document.getElementById("seta2");
let z = document.getElementById("seta");
let y = document.getElementById("mudar");
let x = document.getElementById("abrirMenu");
a.addEventListener("click", esconderConta);
z.addEventListener("click", escolherConta);

function abrir() {
    x.style.width = "80vw";
    y.style.transform = "translate(315px)";
}

function fechar(){
    x.style.width = "0";
    y.style.transform = "translate(-300px)";

}

function escolherConta(){
    document.getElementById("selecao_conta").style.height = "70vh";
}

function esconderConta(){
    document.getElementById("selecao_conta").style.height = "0";
}