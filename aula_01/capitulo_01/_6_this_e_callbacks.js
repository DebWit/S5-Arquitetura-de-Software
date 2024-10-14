// O this em JavaScript é uma palavra-chave especial que 

// faz referência ao contexto em que uma função está sendo executada. 
// depende de como e onde a função foi chamada. 
// é utilizada dentro de funções e objetos para referenciar o objeto atual ou o contexto de execução onde a função está operando.


// ---------------------------------- Como o this Funciona? --------------------------------------
// O valor de this muda conforme o modo como a função é chamada:


// ____________ Exemplo 1: No escopo (contexto) global
// Fora de qualquer função ou objeto, o this refere-se ao objeto global. 
// No caso de um navegador, isso é o window.
console.log(this); // Em um navegador, isso imprime o objeto 'window'


// ____________ Exemplo 2: Dentro de um Objeto
// Quando você usa this dentro de um método de um objeto, ele faz referência ao próprio objeto.
const pessoa = {
    nome: "Débora",
    idade: 20,
    dizerNome: function() {
        console.log(this.nome); // 'this' se refere ao objeto 'pessoa'
    }
};
pessoa.dizerNome(); // Saída: 'Débora'

// Aqui, this.nome faz referência à propriedade nome do objeto pessoa, ou seja, "Débora". Mesmo que já houvesse uma variável global chamada nome, ao usar o this DENTRO desse objeto, ele vai entender que está falando da variável local do objeto, que seria Débora.


// ____________ Exemplo 3: Em funções tradicionais
// Quando uma função é chamada sozinha, fora de um objeto, o valor de this será o objeto global (window no navegador).
function mostrarThis() {
    console.log(this); // No escopo global, 'this' se refere ao objeto global (window no navegador)
}
mostrarThis(); // Saída: 'window' (ou objeto global em outros ambientes)

// Neste caso, this refere-se ao objeto global porque a função mostrarThis foi chamada diretamente no escopo global (fora de uma aba específica, como a aba da função).

// ---------------------------------- Problemas --------------------------------------
// Ao usar this dentro de funções tradicionais em callbacks ou temporizadores, o valor de this pode mudar para o objeto global, em vez do objeto ao qual você esperava que ele se referisse.
function Pessoa1() {
    this.nome = "Débora";
    
    setTimeout(function() {
        console.log(this.nome); // 'this' se refere ao objeto global (window), não ao objeto 'Pessoa'
    }, 1000);
}
const pessoa2 = new Pessoa1(); // Esperávamos que imprimisse 'Débora', mas o resultado será 'undefined'
//Aqui, this.nome imprime undefined porque o this dentro da função tradicional no setTimeout está referenciando o objeto global (no navegador, window), não a instância de Pessoa.
// a função setTimeout é como se fosse um temporizador. Ela pede a ação e em quanto tempo (unidade = milissegundos) essa ação deverá sre realizada.

// Para resolver esse problema podemos usar as arrow functions
// O this em uma arrow function não varia. Ele herda o valor de this do escopo em que a arrow function foi criada, o que significa que ele sempre se refere ao contexto onde ela foi definida.

function Pessoa2() {
    this.nome = "Débora";
    
    setTimeout(() => {
        console.log(this.nome); // Agora 'this' se refere ao objeto 'Pessoa', como esperado
    }, 1000);
}
const pessoa3 = new Pessoa2(); // Saída: 'Débora'
// Aqui, como usamos uma arrow function no setTimeout, o this dentro da arrow function herda o this da função Pessoa, e se refere corretamente ao objeto Pessoa. A arrow function não cria um novo this, mas mantém o valor do this do escopo onde ela foi definida.


// portanto:
// Funções Tradicionais: O valor de this varia dependendo de como a função é chamada. Em callbacks ou temporizadores, this pode mudar para o objeto global.
// Arrow Functions: O this é lexicamente herdado do escopo onde a arrow function foi definida, o que significa que o valor de this é fixo e não muda, eliminando muitos problemas comuns.
