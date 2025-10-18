/**
 * Aqui iremos ver como trabalha com conjuntos em JS
 */

let nomes = ["Andre","Bruno","Menot","Pedro","Cleber","Roger"];
console.log("Nome escolido" + " " + nomes[3]);


console.log("-".repeat(50))

for (let i=0; i<nomes.length;i++){
    console.log(nomes[i])
}
console.log("Fim do for (1ª opção)")


console.log("-".repeat(50))

for (const it of nomes){
    console.log(it);

}
console.log("Fim do for (2ª opção)")


console.log("-".repeat(50))

let i=0;
while(i<nomes.length){
    console.log(nomes [i++]);
}
console.log("Fim do while")
