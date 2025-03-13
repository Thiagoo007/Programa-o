export function calcularIMC(peso, altura) {
    return peso / (altura * altura)
}

 export const tabelaIMC = [
    {limite: 18.5, clasificacao: "Magreza"}, 
    {limite: 24.9, clasificacao: "Normal"}, 
    {limite: 29.9, clasificacao: "Sobrepeso"}, 
    {limite: 34.9, clasificacao: "obesidade Grau I"}, 
    {limite: 39.9, clasificacao: "obesidade Grau II"}, 
    {limite: 49.0, clasificacao: "obesidade Grau III"},  
]