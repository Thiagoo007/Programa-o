const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function manipularString(texto, letraAntiga, letraNova) {
    
    let maiusculas = texto.toUpperCase();
    console.log("Maiúsculas:", maiusculas);

  
    let minusculas = texto.toLowerCase();
    console.log("Minúsculas:", minusculas);

    
    let invertida = texto.split('').reverse().join('');
    console.log("Invertida:", invertida);

    
    let substituida = texto.split(letraAntiga).join(letraNova);
    console.log(`Substituída (${letraAntiga} por ${letraNova}):`, substituida);
}


rl.question('Digite uma string: ', (texto) => {
    rl.question('Digite a letra a ser substituída: ', (letraAntiga) => {
        rl.question('Digite a letra para substituição: ', (letraNova) => {
            manipularString(texto, letraAntiga, letraNova);
            rl.close();
        });
    });
});
