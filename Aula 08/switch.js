/**
 * Exemplos de uso do switch
 */

console.log (" Menu de opções");
console.log (" 1 - Cadastro ");
console.log (" 2 - Consulta");
console.log (" 3 - Alteração");
console.log (" 4 - Exclusão");
let op = 6; 

//usando o seitch

switch(op){
    case 1: console.log ("Escolheu Cadastro");break;
    case 2: console.log ("Escolheu Consulta");break;
    case 3: console.log ("Escolheu Alteração");break;
    case 4: console.log ("Escolheu Exclusão");break;
    default: console.log ("Escolheu uma opção inválida");
}
