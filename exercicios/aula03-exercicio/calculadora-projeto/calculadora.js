

function soma(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    if (b === 0) {
      return "Erro: Divisão por zero não é permitida";
    }
    return a / b;
  }
  
  export { soma, subtracao, multiplicacao, divisao };
  