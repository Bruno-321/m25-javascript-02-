const validar_envio = () => {
    const cmpNome = document.querySelector("#idnome");
    if (cmpNome.value != ""){
        console.log("Tem contoúdo!! ", cmpNome.value);
        return true;
    } else {
        console.log("Não tem conteúdo!!! ", cmpNome.value);
        return false;
    }
}

//Adicionando o envento de submit ao formulario 
const form = document.querySelector("#idform");
form.addEventListener('submit', function(e){
    console.log("Evento form!");
    console.log(validar_envio());
    if (!validar_envio()) e.preventDefault();
})