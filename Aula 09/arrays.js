/**
 * Código que vai demostrar o uso dos arrays em JavaScript
 */

//definindo uma array

const vetor = [];
vetor.push("Item 1");
vetor.push("Item 2");
vetor.push("Item 3");
vetor.push(12345);
console.log(vetor);

console.log(vetor.pop()); // remove o ultimo elemento

console.log(vetor);

vetor.splice(1,1); //indice e quantidade, indice começa em 0, e tambem ele remove um item especifico

console.log(vetor);

console.log("\n" + "-" .repeat(20) + "\n");


//Percorrendo o vetor com o FOR (1ª opção)

for(let i=0; i< vetor.length; i++){
    console.log(vetor[i])

}
console.log("Listando vetor for 1ªopção")

//Percorrendo o vetor com o FOR (2ª opção)

for (let it of vetor){
    console.log(it)
}
console.log("Listando vetor for 2ªopção")

//Percorrendo o vetor com o FOREACH (3ª opção)

vetor.forEach(it => console.log(it))
