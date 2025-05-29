const leia = require('readline-sync');

// Elabore um algoritmo que leia uma Matriz 3×3 de números inteiros e em seguida, mostre na tela:
// ● Todos os elementos da Diagonal Principal
// ● Todos os elementos da Diagonal Secundária
// ● A Soma de todos os elementos da Diagonal Principal
// ● A Soma de todos os elementos da Diagonal Secundária

const matriz = [[], [], []];

console.log("Digite os elementos da matriz:");
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        matriz[i][j] = leia.questionInt(`Elemento [${i}][${j}]: `);
    }
}

let diagonalPrincipal = [];
let diagonalSecundaria = [];
let somaPrincipal = 0;
let somaSecundaria = 0;

for (let i = 0; i < 3; i++) {
    diagonalPrincipal.push(matriz[i][i]);
    somaPrincipal += matriz[i][i];

    diagonalSecundaria.push(matriz[i][2 - i]);
    somaSecundaria += matriz[i][2 - i];
}

console.log("\nElementos da Diagonal Principal: " + diagonalPrincipal.join(", "));
console.log("Elementos da Diagonal Secundária: " + diagonalSecundaria.join(", "));
console.log("Soma dos elementos da Diagonal Principal: " + somaPrincipal);
console.log("Soma dos elementos da Diagonal Secundária: " + somaSecundaria);


