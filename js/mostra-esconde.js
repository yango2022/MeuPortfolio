filterSelection('all') //Executa a função e mostra todas as colunas

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("coluna");
    if (c == "all") c = "";

    //Adiciona a classe "mostrar" (display: block) aos elementos filtrados, e remove a class "show" dos elementos
    //que não estão selecionados
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "mostrar");
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "mostrar");
    }
}

// Mostra elementos filtrados
function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Esconde elementos que não estão selecionados
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Adiciona a classe ative no botão atual
var btnContainer = document.getElementById("containerBotao");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

/* Alternar entre adicionar e remover a classe "responsiva" do topnav quando o usuário clicar no ícone */
function mostrarEsconderMenu() {
    var x = document.getElementById("meuMenuCima");
    if (x.className === "menu-principal") {
        x.className += " responsive";
    } else {
        x.className = "menu-principal";
    }
}