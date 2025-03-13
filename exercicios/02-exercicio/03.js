const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function verificarIdade(idade) {
    if (idade < 18) {
        console.log("Menor de idade.");
    } else if (idade >= 18 && idade < 65) {
        console.log("Maior de idade.");
    } else if (idade >= 65) {
        console.log("Idosa.");
    }
}


rl.question('Digite sua idade: ', (idade) => {
    
    idade = parseInt(idade);
    
    
    if (isNaN(idade)) {
        console.log("Por favor, insira um número válido para a idade.");
    } else {
        verificarIdade(idade);
    }

    rl.close(); 
});
