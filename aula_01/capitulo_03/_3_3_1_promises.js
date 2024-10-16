// ---------------------------------------------- Promises -------------------------------------------------
// O que é uma Promise?
// As Promises são uma maneira de lidar com operações assíncronas de forma mais legível e organizada, resolvendo muitos dos problemas associados ao uso de callbacks. Uma Promise é um objeto que representa a eventual conclusão (ou falha) de uma operação assíncrona e o seu valor resultante. As Promises podem estar em um dos três estados:

// 1. Pending (pendente): A operação ainda está em andamento.
// 2. Fulfilled (resolvida): A operação foi concluída com sucesso.
// 3. Rejected (rejeitada): A operação falhou.

// Considerando que JavaScript tem um objeto Promise, temos algumns metodos para aprender aqui:

// _________ 1.  .then() e .catch() são métodos que você chama em uma Promise existente para LIDAR com os resultados ou erros dessa Promise.
// O método .then() é usado para lidar com o resultado quando a Promise é RESOLVIDA.
// O método .catch() é usado para tratar o erro caso a Promise seja REJEITADA.

// _________ 2.  Promise.resolve() e Promise.reject() são métodos que você usa para criar novas Promises que já estão em um estado resolvido ou rejeitado, respectivamente.

// ---------------------------------------------------------------------------------------------------------
// RESUMINDO

// Promise é um objeto de JS
// .then() e .catch() são metodos para tratar dados quando a promise é resolvida ou rejeitada
// Promise.resolve() e Promise.reject() são métodos para instanciar uma promise no estado descrito como resolve() ou reject()

// ------------------------------------------- exemplo1: ---------------------------------------------------
// Função que calcula a soma de 1 até n
function calculoRapidinho(n) {
    // Retorna uma Promise
    return n >= 0  // Verifica se n é maior ou igual a zero
      ? Promise.resolve(n * (n + 1) / 2)  // Se o número for maior ou igual a zero, resolva a promise, que no caso é fazer essa conta
      : Promise.reject('Somente positivos'); // Se não, rejeita a Promise, que passa como valor uma mensagem de erro
}
  
  // Testando a função
  calculoRapidinho(10)
    .then((res) => console.log(res))  // Se a Promise for resolvida, imprime o resultado
    .catch((erro) => console.log(`Erro: ${erro}`));  // Se for rejeitada, imprime o erro
  
// Definição da Função: A função calculoRapidinho recebe um número n.

//Verificação da Condição: Se n é maior ou igual a zero, a Promise é resolvida com o resultado da soma de 1 até n (usando a fórmula n x (n + 1)/2 conhecida como soma de Gauss). Se n é menor que zero, a Promise é rejeitada com a mensagem "Somente positivos".


// ------------------------------------------- exemplo 2: ---------------------------------------------------
// para nao ter que escrever o then catch toda vez que eu quiser testar a função, podemos criar uma função pra ela tambem
function calculaRapidinho(n) {
    return n >= 0  
      ? Promise.resolve(n * (n + 1) / 2)
      : Promise.reject('Somente positivos'); 
}

// Função para calcular e tratar o resultado
function calcularEImprimir(n) {
    calculaRapidinho(n)  // Chama a função calculaRapidinho
        .then((res) => console.log(res))  // Se a Promise for resolvida, imprime o resultado
        .catch((erro) => console.log(`Erro: ${erro}`));  // Se for rejeitada, imprime o erro
}

// Testando a nova função
calcularEImprimir(10);  // Chama a função para calcular e imprimir o resultado: 55
calcularEImprimir(-5);  // Chama a função para testar um valor inválido: Erro: Somente positivos
calcularEImprimir(3);   // Saída: 6


// ------------------------------------------- exemplo 3: ---------------------------------------------------
// Função que simula uma operação demorada
function demorada() {
    // A função demorada retorna uma nova Promise. Uma Promise é um objeto que representa o resultado de uma operação assíncrona. Ela aceita uma função chamada "executor", que tem dois parâmetros: resolve e reject.
    return new Promise((resolve, reject) => {
      setTimeout(() => {  // Simula uma operação assíncrona que leva 2 segundos
        resolve('Demorou, mas deu certo!');  // Resolve a Promise com uma mensagem de sucesso
      }, 2000); // Espera 2 segundos
    });
  }
  
  // Testando a função demorada
  demorada().then((res) => console.log(res));  // Quando a Promise for resolvida, imprime a mensagem

// Saída: Demorou, mas deu certo!

