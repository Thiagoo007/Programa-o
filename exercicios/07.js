const readline = require('readline');

// Cria uma interface de leitura e escrita no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que recebe um array de strings e realiza as operações solicitadas
function manipularArrayStrings(array) {
    console.log("\nArray original:", array);

    // 1. Converte todas as strings para maiúsculas
    let maiusculas = array.map(item => item.toUpperCase());
    console.log("\nStrings em maiúsculas:", maiusculas);

    // 2. Filtra as strings que começam com a letra 'A'
    let comA = array.filter(item => item.startsWith('A'));
    console.log("\nStrings que começam com a letra 'A':", comA);

    // 3. Cria um novo array com o comprimento de cada string
    let comprimentos = array.map(item => item.length);
    console.log("\nComprimento de cada string:", comprimentos);
}

// Função para capturar o array do usuário
rl.question('Digite um array de strings (separadas por vírgula): ', (entrada) => {
    // Divide a entrada do usuário em um array de strings
    let arrayUsuario = entrada.split(',').map(item => item.trim());

    // Chama a função para manipular o array de strings
    manipularArrayStrings(arrayUsuario);

    rl.close(); // Fecha a interface após a execução
});
