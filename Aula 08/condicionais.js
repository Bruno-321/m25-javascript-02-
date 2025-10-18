/**
 * Exemplos de uso de condicionais
 */
let idade = 17;
//usando if (se)
if (idade>=18){
    console.log("Você pode dirigir!!");

} else if (idade >= 16) {
    console.log("Você está quase no ponto para dirigir!!");

} else {
    console.log("Você não pode dirigir, você é menor de idade!!");

}

/**
 * ** Operadores relacionias :
 * < menor que             => 10 > 5    => verdadeiro
 * > maior que             => 5 < 2     => falso 
 * == igual a              => 10 == 10  => verdade 
 * != diferente            => 10 != 5   => verdade 
 * >= maior ou igual a     => 10 >= 11  => falso
 * <= menor ou igual a     => 10 <= 11  => verdade
 * 
 * ** Exemplo com texto :
 * 'Ana' > 'ana' => Falso
 * 
 * ** Operadaores Logicos :
 * && operador AMD => idade >= 18 && idade <= 60
 *                 => verdadeiro para idades entre 18 e 60
 *  
 * || operador OR  => Idade < 18 || idade > 60
 *                 => Vedadeiro para idades menores de 18 ou 60 idades maiores de 60
 * 
 * ! operador NOT  => ! (idade >= 18 && idade <= 60)
 *                 => Nesse caso, seira equivalente a Vedadeiro para idades menores de 18 ou 60 idades maiores de 60
 */


