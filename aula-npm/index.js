import {calcularIMC, tabelaIMC} from "./CalculadoraIMC.js"

console.log(">>> calculadora IMC <<<")
console.table(tabelaIMC)

const peso = 80 
const altura = 1.70

const resultado = calcularIMC(peso, altura) 
    
console.log("Resultado IMC:")
console.log(resultado.toFixed(2))

import moment from "moment";

const hoje = moment().locale('pt-br')

console.log("data:")
console.log(hoje.format("DD/MM/YYYY"))




