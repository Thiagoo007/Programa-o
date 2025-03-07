const readline = require('readline');

// Cria uma interface de leitura e escrita no terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função que realiza as operações no objeto
function manipularObjeto(pessoa) {
    console.log("\nObjeto atual:", pessoa);

    rl.question('\nEscolha uma operação:\n1. Adicionar uma nova propriedade.\n2. Remover uma propriedade.\n3. Listar todas as propriedades.\nDigite o número da operação: ', (operacao) => {

        if (operacao === '1') {
            // Adicionar uma nova propriedade
            rl.question('Digite o nome da nova propriedade: ', (nomePropriedade) => {
                rl.question(`Digite o valor para a propriedade ${nomePropriedade}: `, (valorPropriedade) => {
                    pessoa[nomePropriedade] = valorPropriedade;
                    console.log(`Propriedade '${nomePropriedade}' adicionada ao objeto.`);
                    console.log("Objeto após adição:", pessoa);
                    rl.close();
                });
            });
        } else if (operacao === '2') {
            // Remover uma propriedade
            rl.question('Digite o nome da propriedade que deseja remover: ', (propriedadeARemover) => {
                delete pessoa[propriedadeARemover];
                console.log(`Propriedade '${propriedadeARemover}' removida do objeto.`);
                console.log("Objeto após remoção:", pessoa);
                rl.close();
            });
        } else if (operacao === '3') {
            // Listar todas as propriedades
            console.log("\nPropriedades do objeto:");
            for (let propriedade in pessoa) {
                console.log(`${propriedade}: ${pessoa[propriedade]}`);
            }
            rl.close();
        } else {
            console.log("Operação inválida.");
            rl.close();
        }
    });
}

// Objeto inicial
let pessoa = {
    nome: "Carlos",
    idade: 28,
    cidade: "São Paulo"
};

// Chama a função para manipular o objeto
manipularObjeto(pessoa);
