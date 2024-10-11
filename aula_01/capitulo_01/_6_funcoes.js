// Javascript possui formas diferentes para se criar funções: blocos de código com nome - ou não - que podem ser colocados em execução em algum momento. A forma tradicional para se criar funções em Javascript envolve a palavra function

// _________________________________________ FUNÇÃO NOMEADA ______________________________________
// _______________ função sem parâmetros
function hello (){
    console.log ('Oi')
}
hello() // saída: 'Oi'

// _______________ função com o parâmetro "nome"
function hello (nome){
    console.log ('Hello, ' + nome)
}
hello('Pedro') // Saída: Hello, Pedro
// nota: ao dar o mesmo nome de função, A PRIMEIRA FUNÇÃO HELLO FOI SUBSTITUIDA PELA SEGUNDA, o que significa que a saída da linha 8 mudou após escrever essa segunda função, agora a saída da linha 8, considerando que a nova função precisa de um parâmetro, e imprime "Hello, + nome", e não foi passado esse parâmetro na linha 8, a saída será
// Nova Saída da Linha 8: Hello, undefined 


// _______________ função de retorno com valor
function soma (a, b) {
    return a + b;   
}

const res = soma (2, 3)
console.log (res) ; // retorna 5

// _________________________________________ FUNÇÃO ANÔNIMA ______________________________________
// Neste caso, a função não tem nome e é atribuída à variável umaFuncao. Esta função pode ser chamada usando o nome da variável.

let umaFuncao = function() {
    console.log('Fui armazenada em uma variável');
};
umaFuncao();

// ________ outros exemplos

const dobro = function (n) {
    return n * 2;
};

const rest = dobro(); //retorna NaN
const rest1 = dobro(4); // retorna 8
console.log(rest);
console.log(rest1);

const triplo = function (n = 5) { // caso o usuário não passe um parâmetro, o valor padrão será 15
    return 3 * n;
};

console.log(triplo()); // retorna 15
console.log(triplo(10)); // retorna 30

//  ____________________________________ Passagens de Funções como parâmetro ____________________________________
// Função para processar pedidos
function processarPedido(acaoEspecifica) {
    console.log("Registrando o pedido no sistema...");
    acaoEspecifica(); // Executa a função específica que foi passada
}

// Funções que representam ações específicas para diferentes tipos de pedidos
function comprar() {
    console.log("Processando pedido de compra...");
}

function vender() {
    console.log("Processando pedido de venda...");
}

// Chamamos a função processarPedido com diferentes ações
processarPedido(comprar); // Passa a função 'comprar' como argumento
processarPedido(vender);  // Passa a função 'vender' como argumento
// Saída: Registrando o pedido no sistema...
          //Processando pedido de compra...
          //Registrando o pedido no sistema...
          //Processando pedido de venda...

//  ____________________________________ Funções de alta ordem ____________________________________
// continuar daqui
