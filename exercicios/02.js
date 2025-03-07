const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function realizarOperacoes(num1, num2) {
  
    let soma = num1 + num2;
    console.log(`Soma: ${num1} + ${num2} = ${soma}`);


    let subtracao = num1 - num2;
    console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`);

    
    let multiplicacao = num1 * num2;
    console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicacao}`);

    if (num2 !== 0) {
        let divisao = num1 / num2;
        console.log(`Divisão: ${num1} / ${num2} = ${divisao}`);
    } else {
        console.log("Divisão por zero não é permitida.");
    }

    
    if (num1 > num2) {
        console.log(`${num1} é maior que ${num2}.`);
    } else if (num1 < num2) {
        console.log(`${num1} é menor que ${num2}.`);
    } else {
        console.log(`${num1} é igual a ${num2}.`);
    }
}


let num1 = 15;
let num2 = 5;

realizarOperacoes(num1, num2);
