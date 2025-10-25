/**
 * Manipulando objetos do HTML com JS
 */

const incluir = () => {
    //Criando um elemento li para ser colocando no documento
    const li = document.createElement("li");

    //const txtCmp = document.getElementById("idtexto");       ( Uma das formas de selecionar o id no HTML)
    const txtCmp = document.querySelector("#idtexto");             

    //colocando o conteudo do texto no li
    li.textContent = txtCmp.value;

    //colocando o li no ol, posso usar o (querySelector("#idtexto"))
    const ul = document.getElementById("idlista");
    ul.appendChild(li);
} 

const remover = () => {
    const lis = document.querySelectorAll("#idlista li");
    const txtCmp = document.querySelector("#idtexto");
    const ul = document.querySelector("#idlista");
    //Percorrendo os lis 
    lis.forEach(it=>{
        if(it.textContent == txtCmp.value){
            ul.removeChild(it);      //Remove o li do ul
        }
    })
}

//Adicionando um evento de click no botão de incluir
const btnAdicionar = document.querySelector("#idadicionar");
const btnRemover = document.querySelector("#idrenover");

//Colocando o evento no btnAdicionar
btnAdicionar.addEventListener('click', incluir);
btnRemover.addEventListener('click', remover);
