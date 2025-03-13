const readline = require('readline');

// Cria uma interface de leitura e escrita no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Objeto do livro
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R. Tolkien",
    ano: 1954
};

// 1. Desestruturar o título e o autor do objeto
const { titulo, autor } = livro;

console.log(`\nTítulo: ${titulo}`);
console.log(`Autor: ${autor}`);

// 2. Função que recebe o objeto e retorna uma string com o título e o autor
function obterTituloAutor(livro) {
    const { titulo, autor } = livro;  // Desestruturando o objeto na função
    return `O título do livro é "${titulo}" e o autor é ${autor}.`;
}

// Interação com o usuário
rl.question("\nDeseja obter o título e o autor do livro? (sim/não): ", (resposta) => {
    if (resposta.toLowerCase() === 'sim') {
        console.log("\n" + obterTituloAutor(livro));  // Chama a função
    } else {
        console.log("\nOperação cancelada.");
    }
    
    rl.close();  // Fecha a interface de leitura
});
