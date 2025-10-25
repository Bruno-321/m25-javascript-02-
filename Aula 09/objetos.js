/**
 * Nesse codigo iremos ver objeots em JS ( JSOM )
 */

//JSOM -> JavaScript Object Notation 

const meuObjeto = {

    "nome": "Bruno Souza",
    "endereco": "Rua Alamedas",
    "numero": 258,
    "ehfumante": false,
    "ola": ()=> {
        console.log("Olá mundo!");
    },
    "telefones": {
        "recidencial": "14 99999-9999",
        "comencial": "14 00000-0000"
    }
}

meuObjeto.ola()
console.log(meuObjeto)

console.log("\n" + "-" .repeat(20) + "\n");

//transformando o objeto em texto 

console.log(JSON.stringify(meuObjeto))

console.log("\n" + "-" .repeat(20) + "\n"); 

//trasnformando um texto em JSON 

const txtObjeto = ' {"codigo":1234, "preco": 15.32, "descricao": "teste" } '
const obj = JSON.parse(txtObjeto); // comando utilizado para transformar texto em objeto JSON 
console.log(obj);