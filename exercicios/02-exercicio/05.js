const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularValores(numero) {
    let dobro = numero * 2;
    let triplo = numero * 3;
    let quadrado = numero * numero;
    
    console.log(`Número: ${numero}`);
    console.log(`Dobro: ${dobro}`);
    console.log(`Triplo: ${triplo}`);
    console.log(`Quadrado: ${quadrado}`);
}

rl.question('Digite um número: ', (entrada) => {
   
    let numero = parseFloat(entrada);
    
   
    if (isNaN(numero)) {
        console.log("Por favor, insira um número válido.");
    } else {
        calcularValores(numero); 
    }

    rl.close(); 
});
