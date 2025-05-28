const leia = require('readline-sync');

// // Escreva um algoritmo, que leia 2 números inteiros via teclado, onde o primeiro número
// deve ser menor do que o segundo número. Caso contrário, deve ser exibida uma
// mensagem na tela informando que o intervalo é inválido e sair do programa.
// No intervalo informado, mostre na tela todos os números que são múltiplos de 3
// e 5.


let numero1, numero2, contador;
numero1 = leia.questionInt("Digite o primeiro numero: ");
numero2 = leia.questionInt("Digite o segundo numero: ");

if (numero1 < numero2){
for(contador = numero1; contador <= numero2; contador++){
    if(contador % 3 === 0 && contador % 5 === 0){
        console.log(contador + " é multiplo de 3 e 5")
    } 
}
}else{
    console.log("Intervalo invalido")
}




