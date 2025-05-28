const leia = require('readline-sync');

// Escreva um algoritmo, que leia a idade de várias pessoas (números inteiros), 
// via teclado e mostre na tela o total de pessoas cuja idade seja menor que 21 anos 
// e o total de pessoas cuja idade, seja maior que 50 anos. A leitura dos dados deve
//  ser finalizada ao digitar uma idade negativa.

let idade;
let menores = 0;
let maiores = 0;

idade = leia.questionInt("Digite uma idade: ");

while(idade > 0){
    if (idade < 21){
        menores++;
    } else if (idade > 50){
        maiores++;
    }

    idade = leia.questionInt("Digite uma idade: ");

}

console.log("Total de pessoas menores de 21 anos: " + menores);
console.log("Total de pessoas maiores de 50 anos: " + maiores);