const readline = require('readline');

// Cria uma interface de leitura e escrita no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que recebe um array e realiza as operações solicitadas
function manipularArray(array) {
    console.log("\nArray atual: ", array);

    rl.question('\n1. Adicione um número ao final do array.\nDigite um número para adicionar: ', (numAdicionado) => {
        let numero = parseInt(numAdicionado);
        if (isNaN(numero)) {
            console.log("Por favor, insira um número válido.");
        } else {
            array.push(numero); // Adiciona o número ao final
            console.log(`Número ${numero} adicionado ao final do array.`);
            console.log("Array após adição: ", array);

            // Remover o primeiro número do array
            let removido = array.shift(); // Remove o primeiro número
            console.log(`Número ${removido} removido do início do array.`);
            console.log("Array após remoção do primeiro número: ", array);

            // Encontrar o maior número no array
            let maiorNumero = Math.max(...array);
            console.log("Maior número no array: ", maiorNumero);

            // Encontrar o menor número no array
            let menorNumero = Math.min(...array);
            console.log("Menor número no array: ", menorNumero);

            rl.close(); // Fecha a interface após a execução
        }
    });
}

// Array inicial
let array = [10, 20, 30, 40, 50];

// Chama a função para manipular o array
manipularArray(array);

