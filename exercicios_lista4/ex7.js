const leia = require('readline-sync');

// Dado um vetor contendo 10 números inteiros não ordenados e não repetidos, 
// construa um algoritmo que consiga pesquisar dados no vetor, onde o usuário irá digitar
// um número e o programa deve exibir na tela a posição deste número no vetor. 
// Caso o número não seja encontrado, a mensagem: “Não foi encontrado!” deve ser exibida na tela.

const vetorInteiros = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let numeroEscolhido, posicao;

numeroEscolhido = leia.questionInt("Digite o numero que voce deseja encontrar: ");
posicao = vetorInteiros.indexOf(numeroEscolhido);

if (posicao !== -1){
    console.log("O numero " + numeroEscolhido + " esta localizado na posição: " + posicao)
} else {
    console.log("O numero " + numeroEscolhido + " nao foi encontrado!")
}


