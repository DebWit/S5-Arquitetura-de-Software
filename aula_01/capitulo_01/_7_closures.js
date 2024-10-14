// ___________________________________________________________ CLOSURES ________________________________________________________
// Um closure acontece quando uma função interna "lembra" do seu escopo externo, mesmo depois que a função externa já terminou sua execução.

// ------------------------------------------ Exemplo 1: ---------------------------------------------
function f() {
    let nome = 'João';
    function g() {
        console.log(nome); // 'nome' está acessível aqui
    }
    g(); // Chama a função 'g', que acessa 'nome'
}
f();

// funcionamento:
//1. f() define uma variável local nome com o valor 'João'.
//2. Dentro de f(), há uma função g() que imprime o valor de nome.
//3. Mesmo depois de f() terminar sua execução, a função g() lembra da variável nome por causa do closure, então quando g() é chamada, ela ainda tem acesso à variável nome.

// ------------------------------------------ Exemplo 2: ---------------------------------------------
function saudacoesFactory(saudacao, nome) {
    return function() {
        console.log(saudacao + ', ' + nome);
    };
}
let olaJoao = saudacoesFactory('Olá', 'João'); // Cria um closure
olaJoao(); // Saída: 'Olá, João'

// funcionamento:
//1. saudacoesFactory recebe dois parâmetros: saudacao e nome.
//2. Ela retorna uma função anônima que, quando chamada, imprime a saudação e o nome combinados.
//3. Quando você chama saudacoesFactory('Olá', 'João'), ela retorna uma função que lembra dos valores de saudacao e nome — mesmo que saudacoesFactory já tenha terminado de executar.
//4. A função armazenada em olaJoao ainda consegue acessar saudacao e nome quando é chamada, imprimindo 'Olá, João'.

// ------------------------------------------ Por que Closures são úteis? ---------------------------------------------
// Closures são usados em diversas situações onde você quer preservar o estado entre execuções de funções. Um exemplo clássico é o de contadores, onde você quer que o valor do contador seja lembrado entre as chamadas:
function criarContador() {
    let contador = 0;
    return function() {
        contador++;
        console.log(contador);
    };
}

let meuContador = criarContador();
meuContador(); // Saída: 1
meuContador(); // Saída: 2
meuContador(); // Saída: 3

//Aqui, o valor de contador é preservado pela função interna, mesmo após a execução de criarContador. A cada vez que você chama meuContador(), o valor de contador é incrementado e "lembrado" graças ao closure.