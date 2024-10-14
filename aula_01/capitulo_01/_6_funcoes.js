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


//  ____________________________________ Arrow function ____________________________________

// A arrow function (função de seta) é uma forma simplificada de declarar funções em JavaScript, introduzida no ECMAScript 6 (ES6). Ela utiliza o símbolo => para separar a lista de parâmetros do corpo da função, o que a torna mais concisa e elegante em muitas situações.

// sintaxe basica
const nomeDaFuncao = (parametros) => {
    return resultado;
};

// ou, simplificando
const nomeDaFuncao2 = parametro => resultado;

// ___________ caracteristicas da arrow function
// _______________ 1. Parênteses Opcionais:

// Se a função tiver um único parâmetro, você pode omitir os parênteses.
// exemplo: 
const dobrado = valor => valor * 2; // Um parâmetro, sem parênteses
const soma = (a, b) => a + b;     // Dois parâmetros, parênteses obrigatórios

// _______________ 2. Chaves Opcionais:
// Se o corpo da função tiver apenas uma instrução, você pode omitir as chaves.
// Quando as chaves são omitidas, o return também é implícito.
//exemplo: 
const triplo3 = valor => valor * 3; // Sem chaves, return implícito
const quadrado2 = valor => {        // Com chaves, return obrigatório
    return valor * valor;
};

// _______________ 3. Sem nome:
// Uma arrow function não tem nome próprio, ou seja, é uma função anônima. No entanto, você pode armazená-la em uma variável ou constante, o que dá a ela um "nome".

const saudacao = () => {
    console.log("Olá, mundo!");
};
saudacao(); // Saída: Olá, mundo!

//  ____________________________________ Funções de alta ordem ____________________________________
// Funções de alta ordem são funções que podem receber outras funções como parâmetros ou retornar funções. Elas permitem um nível avançado de manipulação de código, onde funções podem ser tratadas como qualquer outro valor.

function g() {
    function outraFuncao() {
        console.log('Fui criada por g');
        // nao tem retorno
    }
    function maisUma() {
        console.log('Sou mais uma');
        return () => console.log('A'); // esse retorno foi definido como uma função anonima, voce percebe pelos parenteses apos o return, eles indicam que há uma função sem nome que recebe "" de parâmetro
    }
    return [outraFuncao, maisUma]; // retorno da função g() é uma lista, onde o primeiro item sera outraFuncao e o segundo maisUma
}

g()[0](); // saída: Fui criada por g
g()[1](); // saída: Sou mais uma
g()[1]()(); // saída: Sou mais uma  A
// Aqui, você está executando dois pares de parênteses. A primeira chamada g()[1]() chama a função maisUma, e a segunda chamada () executa a função anônima retornada por maisUma. O primeiro g()[1]() chama a função maisUma, que imprime 'Sou mais uma' e retorna a função anônima () => console.log('A'). O segundo () executa a função anônima retornada, que imprime 'A'.

// Quando temos funções alta ordem tempos funções que chamamos de:
// - Função externa: É uma função que contém outras funções dentro dela.
// - Função interna: É uma função que é declarada dentro de outra função.
// Além disso, outro termo importante é o
// - Escopo externo: É o ambiente onde as variáveis da função externa estão disponíveis para a função interna.
