const leia = require('readline-sync');

// Escreva um algoritmo, que leia números inteiros via teclado, até que o número zero seja digitado. 
// Ao final, mostre na tela a soma de todos os números digitados, que sejam positivos.

let numero;
let numPositivos = 0;

do {
    numero = leia.questionInt("Digite um numero (0 para sair): ");

    if(numero > 0){
        numPositivos += numero;
    }

} while(numero !== 0);

    console.log("A soma dos numeros positivos eh: " + numPositivos);