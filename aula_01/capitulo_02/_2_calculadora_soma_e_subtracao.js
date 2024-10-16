// Uma calculadora realiza as operações de soma e subtração . 
// Nada impede que funções sejam armazenadas em objetos JSON

const calc = {
    soma: function(a, b){
      return a + b
    },
    subtracao: (a, b) => calc.soma(a, -b)
  }
  console.log(calc.soma(2, 2)) // Saída: 4
  console.log(calc.subtracao(3, 2)) // Saída: 1

// -------------------------- outra forma de escrever a mesma coisa --------------------------

  let calculadora = {
    //pode ser arrow function
    soma: (a, b) => a + b,

    //e função comum também
    subtracao: function (a, b) {
        return a - b;
    },
};
    console.log(`2 + 3 = ${calculadora.soma(2, 3)}`); // Saída: 2 + 3 = 5
    console.log(`2 - 3 = ${calculadora.subtracao(2, 3)}`); // Saída: 2 - 3 = -1

// https://www.json.org/json-en.html
