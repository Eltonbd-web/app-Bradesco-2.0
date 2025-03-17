
let seta_2 = document.getElementById("seta2");
let seta_1 = document.getElementById("seta");
let seta_3 = document.getElementById("seta3");
let mudar_ = document.getElementById("mudar");
let abrir_menu = document.getElementById("abrirMenu");

seta_3.addEventListener("click", moverArea);
seta_2.addEventListener("click", esconderConta);
seta_1.addEventListener("click", escolherConta);


/*abrir e fechar o menu lateral*/
function abrir() {
    abrir_menu.style.width = "80vw";
    mudar_.style.transform = "translate(315px)";
}

function fechar(){
    abrir_menu.style.width = "0";
    mudar_.style.transform = "translate(-300px)";

}

/*abrir e fechar o menu escolher conta */
function escolherConta(){
    document.getElementById("selecao_conta").style.height = "70vh";
}

function esconderConta(){
    document.getElementById("selecao_conta").style.height = "0";
}

/* abre e fecha o menu editar, excluir*/
function moverArea(){
    
    document.getElementById("move_area").classList.toggle("mover");

    let mostrar = document.getElementById("editar_delete").
    style.zIndex;

    if (mostrar === "1"){
        document.getElementById("editar_delete").
    style.zIndex = "-1";
    }else {
        document.getElementById("editar_delete").
    style.zIndex = "1";
    }
    
    let seta = document.getElementById("seta3").innerHTML;

    if (seta === "keyboard_double_arrow_right") {
        document.getElementById("seta3").innerHTML = "keyboard_double_arrow_left";
    }else {
        document.getElementById("seta3").innerHTML = "keyboard_double_arrow_right";
    }
}


/*controle de abertura de menus, para não abrir mais de um
menu simultaneamente */
/*
if(abrir_menu.style.width == "80vw"){
    document.getElementById("selecao_conta").style.height = "0"; 
}
    */